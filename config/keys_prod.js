module.exports = {
  //mongoURI: "mongodb://127.0.0.1:27017/devconnector",
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
};
