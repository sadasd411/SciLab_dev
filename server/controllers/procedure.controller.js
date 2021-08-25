const SciLabProcedure = require('../models/procedure.model');

module.exports={
    helloworld:(req,res)=>{
        return res.json("Hello world Devi!");
    },
    getAll:(req,res) =>{
        SciLabProcedure.find({})
        .sort({type:"ascending"})
        .then((allProcedure) => {
            console.log(allProcedure)
            res.json(allProcedure)
        })
        .catch((err) => res.json(err));
    },
    
    details:(req,res) =>{
        SciLabProcedure.findById({_id:req.params.id})
        .then((details) => {
            console.log(details)
            res.json(details)
        })
        .catch((err) => res.json(err));
    },
  
    create: (req, res) => {
        console.log(req.body);
        SciLabProcedure.create(req.body)
          .then((newObj) => {
            console.log(newObj);
            // res.json is the equivalent of a return from the function
            res.json(newObj);
          })
          .catch((err) => {
            console.log("in procedure create");
            console.log(err);
            res.json(err);
        });
    },
    update: (req, res) => {
      console.log(req.body);
      SciLabProcedure.findByIdAndUpdate(req.params.id,req.body,
         { new:true,
        //  runValidators:true,
          context: 'query'
      })
        .then((updated) => {
          console.log(updated);
          // res.json is the equivalent of a return from the function
          res.json(updated);
        })
        .catch((err) => {
          console.log("in  update");
          console.log(err);
          // res.json is the equivalent of a return from the function
         res.json(err);
      });
  },
  delete: (req, res) => {
    console.log(req.body);
    SciLabProcedure.findByIdAndDelete(req.params.id)
      .then((deleted) => {
        console.log(deleted);
        // res.json is the equivalent of a return from the function
        res.json(deleted);
      })
      .catch((err) => {
        console.log("in procedure delete");
        console.log(err);
        // res.json is the equivalent of a return from the function
        res.json(err);
    });
},
}