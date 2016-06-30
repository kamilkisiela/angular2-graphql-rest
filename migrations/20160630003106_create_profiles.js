exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('profiles', function (table) {
      table.increments('id');
      table.timestamps();
      table.string('title');
      table.string('full_name');
      table.string('avatar');
      table.json('friends');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('profiles')
  ]);
};
