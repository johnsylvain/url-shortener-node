import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import { port } from './server/config';
import appRoutes from './server/routes/app';
import apiRoutes from './server/routes/api';

const app = express();

app.use(express.static(__dirname + '/client/dist'))
app.use(compression());
app.use(bodyParser());

// appRoutes(app);
apiRoutes(app);

app.listen(port, () => {
  console.log(`Listening on :${port}`);
});
