import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { dataSourceOptions } from './db/data-source';

const dataSource = new DataSource(dataSourceOptions);

dataSource
  .initialize()
  .then(() => {
    // Now you can run the migrations manually here
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
