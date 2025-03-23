import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb', // "mysql, mariadb, postgres, sqlite, mssql, oracle, mongodb"）
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || '1qaz@WSX',
  database: process.env.DATABASE_NAME || 'mydb',
  entities: ['dist/**/typeorm-model/*{.ts,.js}'],
  extra: {
    connectionLimit: 10
  },
};