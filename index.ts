import { query, execute, queryWithPagination, transaction } from 'easy-database-connector';

interface User {
    id: number;
    username: string;
    password: string;
    is_deleted: boolean;
    created_at: Date;
    deleted_at: Date;   
}

interface List {
    id: number,
    name: string,
    is_deleted: boolean
}

const users = await query<User>({
    sql: 'SELECT * FROM users WHERE username = @p0',
    parameters: ['test']
});
//console.log(users);
const pagedUsers = await queryWithPagination<User>({
    sql: 'SELECT * FROM users',
    parameters: [],
    page: 2,
    pageSize: 3,
    orderBy: 'created_at ASC'
});
//console.log(pagedUsers);
const addUser = await execute({
    sql: 'INSERT INTO users (username, password_hash) VALUES (@p0, @p1)',
    parameters: ['ts5', 'pass']
});
console.log(addUser);
 const testingTQ = await transaction(async (trx) => {
     await execute({
         sql: 'DELETE FROM users WHERE username = @p0',
         parameters: ['agg']
     });
     await execute({
          sql: 'INSERT INTO users (username, password_hash) VALUES (@p0, @p1)',
          parameters: ['agg', 'pass']
      });
 });
 console.log(testingTQ);
