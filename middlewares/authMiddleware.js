async function authMiddleware(req,res,next) {
    if (req.session.user_id) {
        next()
    } else {
        res.sendStatus(401)
    }
}

module.exports=authMiddleware;