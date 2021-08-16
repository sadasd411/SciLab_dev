const sciLabController = require('../controllers/experiment.controller')

module.exports = (app) => {
    app.get("/",sciLabController.helloworld);
    app.get("/api/experiments", sciLabController.getAll);
    app.get("/api/experiment/:id", sciLabController.details);
    app.post("/api/experiment", sciLabController.create);
    app.put("/api/experiment/:id", sciLabController.update);
    app.delete("/api/experiment/:id", sciLabController.delete);
}