import { DataSource, type DataSourceOptions } from 'typeorm';
import sqliteParams from '../sqlite_params';
import * as entities from '../entities';
import * as migrations from '../migrations';
import { Database } from 'src/app/enums/database';

const dataSourceConfig: DataSourceOptions = {
  name: 'dbConnection',
  type: 'capacitor',
  driver: sqliteParams.connection,
  database: Database.Name,
  mode: 'no-encryption',
  entities: entities,
  migrations: migrations, //["../migrations/*{.ts,.js}"]
  subscribers: [],
  logging: [/*'query',*/ 'error', 'schema'],
  synchronize: false, // !!!You will lose all data in database if set to `true`
  migrationsRun: false, // Required with capacitor type
};

export const dataSource = new DataSource(dataSourceConfig);
const mainDataSource = {
  dataSource: dataSource,
  dbName: Database.Name,
};

export default mainDataSource;
