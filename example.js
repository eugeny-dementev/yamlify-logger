const { configureFormatter } = require('./src/index');

const logger = configureFormatter({});

const line = logger({
  level: 'debug',
  label: 'AppName',
  message: 'Hello from logger',
});

console.log(line);
