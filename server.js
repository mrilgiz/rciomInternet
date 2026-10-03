const express = require('express');
const session = require('express-session');
const path = require('path');
const port=3000;
const app = express();

//настрйока сессий
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

//запуск и подключение статики

app.use('/',express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log("Join to url http://localhost:" + port);
})