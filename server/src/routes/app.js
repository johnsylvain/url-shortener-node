import User from '../models/user';
import Link from '../models/link';

export default function appRoutes(app) {

  app.get('/:code', (req, res) => {
    const { code } = req.params;
    Link.findOne({ code }, (err, link) => {
      if (err) throw err;
      if (link) {
        Link.findOneAndUpdate({ code }, { $inc: { clicks: 1 }}).exec();
        return res.redirect(link.url);
      }
      else return res.send(404)
    })
  })
}
