"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var easy_database_connector_1 = require("easy-database-connector");
var users = await (0, easy_database_connector_1.query)({
    sql: 'SELECT * FROM users WHERE username = @p0',
    parameters: ['antares']
});
console.log(users);
