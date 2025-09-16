/* eslint-disable prettier/prettier */
export default () => {
  return {
    DATABASE_USER: process.env.DB_USER || 'NestJS App',
    DATABASE_PASSWORD: process.env.DB_PASSWORD || 'password',
  };
};
