import express from 'express';
import {
  Profiles
} from '../../sql/models';

function fixFriends(row) {
  // fix `Circural structure` error
  // because `friends` prop is already stringified
  // and we have to reverse that process
  row.friends = JSON.parse(row.friends);
  return row;
}

/**
 * Respond with data in JSON format
 */
function jsonify(res, source) {
  source.then((result) => res.json(result));
  source.catch((error) => res.json(error));
}

export default function (app) {
  const router = express.Router();

  app.use('/api', router);

  // list of all profiles
  router.get('/profiles', (req, res) => {
    jsonify(res, new Profiles().all().map(fixFriends));
  });

  // single profile
  router.get('/profiles/:id', (req, res) => {
    jsonify(res, new Profiles().single(req.params.id).tap(fixFriends));
  });
}
