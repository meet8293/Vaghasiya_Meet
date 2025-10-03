const express = require("express");
const Router = express.Router();
const StudentController = require("../controllers/studentController");
const{
    createValidator,
    updateValidator,
    validate,
} = require("../validators/studentValidator");

Router.get("/index", StudentController.index);
Router.get("/show/:id", StudentController.show);
Router.post("/store", (req, res, next) => {
    const result = validate(createValidator, req.body);
    if(!result.success) {
        return res.status(400).json({status: "error", errors: result.errors});
    }
    StudentController.store(req,res,next);
});
Router.put("/update/:id" , (req, res, next) => {
    const result = validate(updateValidator, req.body);
    if(!result.success) {
        return res.status(400).json({status: "error", errors: result.errors});
    }
    StudentController.update(req,res,next);
});
Router.delete("/delete/:id", StudentController.delete);

module.exports = Router;