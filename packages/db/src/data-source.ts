import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

import * as EntitiesMap from "../../api/src/entities";
import * as MigrationsMap from '../migrations';

export const DbOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  // synchronize: true,
  logging: 'all',
  entities: Object.values(EntitiesMap),
  migrations: Object.values(MigrationsMap),
  subscribers: [],
}

export const AppDataSource = new DataSource(DbOptions)
