const sciLabProcedure = require('../controllers/procedure.controller')

module.exports = (app) => {
    app.get("/",sciLabProcedure.helloworld);
    app.get("/api/procedures", sciLabProcedure.getAll);
    app.get("/api/procedure/:id", sciLabProcedure.details);
    app.post("/api/procedure", sciLabProcedure.create);
    app.put("/api/procedure/:id", sciLabProcedure.update);
    app.delete("/api/procedure/:id", sciLabProcedure.delete);
}