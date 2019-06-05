const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.DATABASE_CONN, {
  useNewUrlParser: true,
}, (err) => {
  if (err) {
    console.log(`We got a problem! ${err}`);
  }
  app.listen(3000);
});
