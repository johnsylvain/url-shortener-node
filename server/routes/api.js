import jwt from 'jsonwebtoken';

import User from '../models/user';
import Link from '../models/link';
import { isAuthenticated } from '../middlewares/auth';
import { jwtSecret } from '../config';

export default function apiRoutes(app) {

  app.get('/api/testAuth', isAuthenticated, (req, res) => {
    res.json({
      success: true
    })
  });


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
            expiresIn: 60 * 20
          })

          res.json({
            success: true,
            message: 'token',
            token
          })
        }
      }

    })
  });

  app.get('/api/links', isAuthenticated, (req, res) => {
    Link.find({}, (err, links) => {
      if (err) throw err;

      res.json(links);
    })
  })
  app.post('/api/links', isAuthenticated, (req, res) => {
    const { url, description } = req.body;
    Link.find({ url }, (err, links) => {
      if(err) throw err;

      if (links.length) {
        return res.json({
          success: false,
          message: 'URL already exists'
        })
      } else {
        const newLink = new Link({
          url,
          description,
          clicks: 0
        })
        newLink.save((err, link) => {
          if (err) return res.send(err);
          res.json(link);
        })

      }
    })
  });

  app.delete('/api/links/:id', isAuthenticated, (req, res) => {
    const id = req.params.id;

    Link.findByIdAndRemove(id, (err, link) => {
      if (err) throw err;
      res.send(link);
    })
  })
}
