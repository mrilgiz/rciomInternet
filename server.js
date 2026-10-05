const express = require('express');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcryptjs');
const pool = require('./config/db');
const port=3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//настрйока сессий
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

async function seed() {

//Создание должностей

    try {
        await pool.query(`
        INSERT INTO roles (id, title)
        VALUES (1,'Администратор'), (2,'Зам'), (3,'Ученый'), (4,'Сотрудник'), (5,'Расходный субъект'), (6,'ИНО-АГЕНТ'), (7,'Секьюрити')
    `)
    } catch (e) {}


//создание администратора

    const username = 'Иглис'
    const password = await bcrypt.hash("1qa2ws3ed", 10)
    const nickname = "MrIlgiz"

    try {
        await pool.query(`INSERT INTO users (id,username, nickname, password) VALUE (1,?,?,?)`, [username, nickname, password])
        await pool.query(`INSERT INTO user_roles (user_id, role_id, access_level) VALUE (?,?,?)`, [1, 1, -1])
    } catch (e) {}
}
seed()
//подключение маршрутов бекенда
const authMiddleware = require('./middlewares/authMiddleware');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/auth',authRoutes);
app.use('/user',authMiddleware,userRoutes);

//запуск и подключение статики

app.use('/',express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log("Join to url http://localhost:" + port);
})