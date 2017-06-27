import User from '../models/user';

export default function appRoutes(app) {
  app.get('/home/:name', (req, res) => {
    res.send(req.params.name)
  })

  app.get('/setup', (req, res) => {
    const john = new User({
      name: 'John Sylvain',
      password: 'test',
      admin: true
    })

    john.save((err) => {
      if(err) throw err;

      res.json({success: true})
    })
  });
}
