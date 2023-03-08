const mongoose = require('mongoose');

async function dbConnexion() {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNEXION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    mongoose.connection.on('error', (err) => {
      console.log(err.message);
    });
    console.log('Mongoose connected !! 🔥 🔥 😀 🍟 🇫🇷');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}
module.exports = dbConnexion;
