const pool = require('../config/db')

async function info(req,res) {
    const user_id = req.session.user_id
    const [rows] = await pool.query(`
        SELECT u.username AS username,
               u.nickname AS nickname,
               u.created_at AS created_at,
               r.title AS role,
               ur.access_level AS access_level
        FROM users u
        JOIN user_roles ur
                   ON ur.id = u.id
        JOIN roles r ON r.id=ur.role_id
        WHERE u.id = ?
        `,
        [user_id]
    )
    if(rows.length > 0){
        return res.status(200).send(rows[0])
    } else {
        return res.status(404).send('User not found')
    }
}
module.exports = {info}