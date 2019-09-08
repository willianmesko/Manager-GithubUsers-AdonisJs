'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
        table.string('email', 254).notNullable().unique()
        table.string('cpf', 11).notNullable().unique()
        table.string('password', 60).notNullable()
        table.boolean('admin', 60).notNullable().defaultTo(0);
        table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
