import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';
import sqliteParams from '../src/app/database/sqlite_params';
import dataSource from '../src/app/database/datasources/main';
import 'reflect-metadata';

customElements.define('jeep-sqlite', JeepSqlite);

const initializeDataSources = async () => {
  //check sqlite connections consistency
  await sqliteParams.connection.checkConnectionsConsistency().catch((e) => {
    console.log(e);
    return {};
  });

  // Loop through the DataSources
  for (const mDataSource of [dataSource]) {
    // initialize
    await mDataSource.dataSource.initialize();
    if (mDataSource.dataSource.isInitialized) {
      // run the migrations
      await mDataSource.dataSource.runMigrations();
    }
    if (sqliteParams.platform === 'web') {
      await sqliteParams.connection.saveToStore(mDataSource.dbName);
    }
  }
};

if (sqliteParams.platform !== 'web') {
  initializeDataSources();
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
} else {
  window.addEventListener('DOMContentLoaded', async () => {
    const jeepEl = document.createElement('jeep-sqlite');
    document.body.appendChild(jeepEl);
    customElements
      .whenDefined('jeep-sqlite')
      .then(async () => {
        await sqliteParams.connection.initWebStore();
        await initializeDataSources();
        platformBrowserDynamic()
          .bootstrapModule(AppModule)
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        throw new Error(`Error: ${err}`);
      });
  });
}
