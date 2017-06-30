import jwt from 'jsonwebtoken';

import User from '../models/user';
import { isAuthenticated } from '../middlewares/auth';
import { jwtSecret } from '../config';

export default function apiRoutes(app) {

  app.get('/api/testAuth', isAuthenticated, (req, res) => {
    res.json({
      success: true
    })
  });

  app.get('/api/users', isAuthenticated, (req, res) => {
    User.find({}, (err, users) => {
      res.json(users)
    })
  })

  app.post('/api/auth', (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) throw err;
      console.log(user)

      if (!user) {
        res.json({ success:false, message: 'Authenication failed. User not found' })
      } else if (user) {
        if (!user.validPassword(req.body.password)) {
          res.json({ success:false, message: 'Authenication failed. Incorrect Password' })
        } else {
          const token = jwt.sign(user, jwtSecret, {
            expiresIn: 60 * 10
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
