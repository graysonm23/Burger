var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
  selectAll: function() {},
  insertOne: function() {},
  updateOne: function() {}
};

module.exports = orm;
