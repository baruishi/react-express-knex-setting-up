// module.exports = {
//   development: {
//     client: "pg",
//     connection:
//       process.env.DATABASE_URL || 
//       `postgres://${process.env.USER}@127.0.0.1:5432/setting_up1`,
//     searchPath: "public",
//     migrations: {
//       directory: "./migrations",
//     },
//     useNullAsDefault: true,
//   },
// };


module.exports = {
  development: {
    client: "pg",
    connection:
      process.env.DATABASE_URL || {
        host : '127.0.0.1',
        user : 'postgres',
        password : "",
        database : 'setting_up1'
      },
    searchPath: "public",
    migrations: {
      directory: "./migrations",
    },
    useNullAsDefault: true,
  },
};

