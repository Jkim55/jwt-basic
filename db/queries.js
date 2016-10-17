"use strict"

var knex = require('./knex');

function getUser(username) {
  return knex("user").where("username", username)
}

function newUser(username, jwt) {
  return knex("user").insert({
	  username: username,
		jwt: jwt
	});
}

module.exports = {
  getUser,
  newUser
}
