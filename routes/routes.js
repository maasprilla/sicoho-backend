var appRouter = function (app) {
  app.use("/consolidados", require('./apis/consolidados/api.consolidados.js'));
}

module.exports = appRouter;
