require('dotenv').config();
const { connect } = require('./lib/utils/connect');
connect();
const app = require('./lib/app');

app.listen('7890', () => {console.log('started!');});


