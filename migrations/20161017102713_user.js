
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments('id');
    table.text('username').;
    table.text('jwt');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
