const { connect } = require('./lib/utils/connect');
connect();
require('dotenv').config();

const app = require('./lib/app');
app.listen('7890', () => {console.log('started!');});


