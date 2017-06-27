import jwt from 'jsonwebtoken';

export function isToken(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, 'wubbalubbadubdub', (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenicate token' })
      } else {
        req.decoded = decoded;
        next();
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided'
    })
  }
}
