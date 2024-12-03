const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => console.log(`Database Connected: on Atlas `))
    .catch((err) => console.log(err));
};
