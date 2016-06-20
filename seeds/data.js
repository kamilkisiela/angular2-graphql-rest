var fake = require('casual');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomProfile() {
  return {
    full_name: fake.full_name,
    title: fake.catch_phrase,
    avatar: 'http://lorempixel.com/90/90/people?' + fake.unix_time, // avoid caching same address
  };
}

function randomFriends(exceptId) {
  // how many friends
  var count = randomInt(1, 3);
  var friends = [];

  // they see me generatin'
  while (friends.length < count) {
    // they randomizin'
    var random = randomInt(0, profilesCount - 1);
    var friendId = ids[random];

    // patrolling
    if (friends.indexOf(friendId) === -1 && friendId !== exceptId) {
      friends.push(friendId);
    }
  }

  return JSON.stringify(friends);
}

// Push to an array multiple time the result that comes from the callback
function multiple(times, cb) {
  'use strict';
  var result = [];

  for (let i = 0; i < times; i++) {
    result.push(cb());
  }

  return result;
}

// we'll keep profiles ids here
var ids = [];
// how many profiles we want to create
var profilesCount = 7;

exports.seed = (knex, Promise) => {
  return knex('profiles').del()
    .then(() => {
      // generate random profiles
      return Promise.all(multiple(profilesCount, randomProfile)
        .map((profile) => {
          // save the id
          return knex('profiles')
            .insert(randomProfile())
            .then((data) => {
              ids.push(data[0]);
            });
        }));
    })
    .then(() => {
      var i = 0;
      // generate friendships
      return Promise.all(multiple(profilesCount, () => randomFriends(ids[i++])))
        .map((friends) => {
          i = 0;
          return friends;
        })
        .map((friends) => {
          return knex('profiles')
            .where('id', ids[i++])
            .update('friends', friends);
        });
    });
};
