import express from 'express';
import { unitRoutes } from './routes/unit.routes';

const host = process.env.APP_HOST ?? 'localhost';
const port = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000;

console.log(host, port);

const app = express();

app.use('/unit', unitRoutes);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
