"use strict"
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'jwtBasic'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
