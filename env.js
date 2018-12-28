const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://localhost:27017/angular-blog'; // Databse URI and database name
  process.env.databaseName = 'production database: angular-blog'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/angular-blog'; // Databse URI and database name
  process.env.databaseName = 'development database: angular-blog'; // Database name
}
