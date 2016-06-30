import express from 'express';
import bodyParser from 'body-parser';
import graphql from './api/graphql';

const app = express();
const PORT = 3010;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

graphql(app);

app.listen(PORT, () => console.log(
  `Server is now running on http://localhost:${PORT}`
));
