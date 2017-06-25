import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';

import { port } from './server/config';
import appRoutes from './server/routes/app';
import apiRoutes from './server/routes/api';

const app = express();

app.use(compression());
app.use(bodyParser());
// app.use(morgan());

(function(app) {
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));
})(app);

// appRoutes(app);
apiRoutes(app);

app.get("*", (req, res, next) => {
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

app.listen(port, () => {
  console.log(`Listening on :${port}`);
});
