const pool = require('../config/db');

async function enter(req, res){
    const { username , password } = req.body

    if (!username || !password){
        return res.sendStatus(400)
    }
    const [rows] = await pool.query(`SELECT id,password FROM USERS`)
    if (rows.length === 0){
        return res.sendStatus(400)
    }
    const user = rows[0]
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch){
        req.session.user_id = user.id
        return res.sendStatus(200)
    } else {
        return res.sendStatus(400)
    }

}

async function check(req, res){
    if (req.session.user_id){
        res.sendStatus(200)
    } else {
        return res.sendStatus(401)
    }
}
async function exit(req, res){
    if (req.session.user_id){
        res.sendStatus(200)
        req.session.destroy()
    } else {
        return res.sendStatus(401)
    }
}

module.exports = {enter,check,exit}