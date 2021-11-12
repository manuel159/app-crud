module.exports = {
  port: process.env.PORT || 3000,

  db: process.env.MONGODB || "TU CADENA DE CONEXIÓN DE MONGO ATLAS",

  urlParser: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
