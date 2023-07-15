import express from 'express';
import { memberPropertyRoutes, memberRoutes, unitRoutes } from './routes';

const host = process.env.APP_HOST ?? 'localhost';
const port = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000;

console.log(host, port);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/unit', unitRoutes);
app.use('/property', memberPropertyRoutes);
app.use('/member', memberRoutes);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
