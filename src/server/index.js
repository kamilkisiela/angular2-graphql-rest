import express from 'express';
import bodyParser from 'body-parser';
import rest from './api/rest';

const app = express();
const PORT = 3010;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

rest(app);

app.listen(PORT, () => console.log(
  `Server is now running on http://localhost:${PORT}`
));
