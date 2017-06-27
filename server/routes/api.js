import jwt from 'jsonwebtoken';

import User from '../models/user';
import { isToken } from '../middlewares/auth';

export default function apiRoutes(app) {
  // app.use(isToken);

  app.get('/api/test', isToken, (req, res) => {
    res.json({
      message: 'from api'
    })
  });

  app.get('/api/users', isToken, (req, res) => {
    User.find({}, (err, users) => {
      res.json(users)
    })
  })

  app.post('/api/auth', (req, res) => {
    User.findOne({ name: req.body.name }, (err, user) => {
      if (err) throw err;

      if (!user) {
        res.json({ success:false, message: 'Authenication failed. User not found' })
      } else if (user) {
        if (user.password !== req.body.password) {
          res.json({success:false, message: 'Authenication failed. Incorrect Password'})
        } else {
          const token = jwt.sign(user, app.get('superSecret'), {
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
