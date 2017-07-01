import User from '../models/user';
import Link from '../models/link';

export default function appRoutes(app) {
  // app.get('/setup', (req, res) => {
  //   const newUser = new User({
  //     username: 'admin',
  //     password: 'password',
  //     admin: true
  //   })
  //
  //   newUser.save((err, user) => {
  //     if (err) return res.send(err);
  //     res.json(user);
  //   })
  // });

  app.get('/:code', (req, res) => {
    const { code } = req.params;
    Link.findOne({ code }, (err, link) => {
      res.redirect(link.url)
    })
  })
}
