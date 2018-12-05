import compression from 'compression';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

import api from './api';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

if (!isProduction) {
  app.use(morgan('dev'));
} else {
  app.use(compression());
}

app.use(cors());

app.use('/api', api);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // tslint:disable-line no-console
  res.status(500).json({
    message: 'Sorry, something unexpected happened. Please try again shortly.'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`); // tslint:disable-line no-console
});

export default app;
