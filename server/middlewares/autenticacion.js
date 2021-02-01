const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.PORT, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }
        req.usuario = decoded.usuario;
        next();
    })
}

const verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: "El usuario no es administrador"
            }
        })
    }
}

module.exports = {
    verificarToken,
    verificaAdmin_Role
}