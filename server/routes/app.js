import User from '../models/user';

export default function appRoutes(app) {
  app.get('/setup', (req, res) => {
    const newUser = new User({
      username: 'admin',
      password: 'password',
      admin: true
    })

    newUser.save((err, user) => {
      if (err) return res.send(err);
      res.json(user);
    })
  })
}
