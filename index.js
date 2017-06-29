import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';

import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { port, dbUri, jwtSecret } from './server/config';
import User from './server/models/user';
import appRoutes from './server/routes/app';
import apiRoutes from './server/routes/api';

const app = express();
mongoose.connect(dbUri);
app.set('superSecret', jwtSecret);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

(function(app) {
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));
  app.get("/", (req, res, next) => {
    const filename = path.join('/dist', "index.html");

    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
})(app);

appRoutes(app);
apiRoutes(app);


app.listen(port, () => {
  console.log(`Listening on :${port}`);
});
