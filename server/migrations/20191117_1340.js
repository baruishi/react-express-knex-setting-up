exports.up = function(knex, Promise) {
  return knex.schema.createTable("setting_up1", (table) => {
    table.increments("id").index();
      table.string("name");
      table.string("surname");
      table.string("description");
  });
};

//foreign - add a foreign key to a table
//index() - adds an index to a table over the given column. A default index name using the columns is used unless indexName is specified.

exports.down = function(knex) {
  return knex.schema.dropTable("setting_up1");
};
