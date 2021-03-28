import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'db_api',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'nestjs_api',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};