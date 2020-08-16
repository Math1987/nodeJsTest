const mongoose = require("mongoose");
const { environment } = require("./environment/environment");

const schema = mongoose.Schema;

const userShchema = schema({
  email: String,
  password: String,
});

mongoose
  .connect(
    `mongodb://${environment.mongodb.user}:${environment.mongodb.pwd}@${environment.mongodb.ip}:${environment.mongodb.port}/${environment.mongodb.dbName}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then((res) => {
    console.log("connexion mongodb ok");
  })
  .catch((err) => {
    console.log(err);
  });
