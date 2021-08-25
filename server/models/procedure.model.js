const mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
// model - is the shape of the json data that we want to put in the collection
const ProcedureSchema = new mongoose.Schema(
    
    {
        procedureName: {
            type: String,
            required:[true, "You must enter a name for procedure"],
            
          },
       
        html: {
            type: String,
            required: true,
            get: function (notes) {
              try {
                return JSON.parse(notes);
              } catch (err) {
                return notes;
              }
            },
            set: function (notes) {
              return JSON.stringify(notes);
                },
              },
       },
     {
        timestamps:true,
    }
);
const modelName = "procedure";
//ExperimentSchema.plugin(uniqueValidator);
const  Content = mongoose.model(modelName,ProcedureSchema);
module.exports= Content;