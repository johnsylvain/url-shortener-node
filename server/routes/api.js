import jwt from 'jsonwebtoken';

import User from '../models/user';
import { isAuthenticated } from '../middlewares/auth';
import { jwtSecret } from '../config';

export default function apiRoutes(app) {

  app.get('/api/test', isAuthenticated, (req, res) => {
    res.json({
      message: 'from api'
    })
  });

  app.get('/api/users', isAuthenticated, (req, res) => {
    User.find({}, (err, users) => {
      res.json(users)
    })
  })

  app.post('/api/auth', (req, res) => {
    User.findOne({ username: req.body.name }, (err, user) => {
      if (err) throw err;

      if (!user) {
        res.json({ success:false, message: 'Authenication failed. User not found' })
      } else if (user) {
        if (!user.validPassword(req.body.password)) {
          res.json({ success:false, message: 'Authenication failed. Incorrect Password' })
        } else {
          const token = jwt.sign(user, jwtSecret, {
            expiresIn: 60
          })

          res.json({
            success: true,
            message: 'token',
            token
          })
        }
      }

    })
  })
}
