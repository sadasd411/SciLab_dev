const mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
// model - is the shape of the json data that we want to put in the collection
const ExperimentSchema = new mongoose.Schema(
    
    {
        experimentName:{
            type: String,
            required:[true, "You must enter a name for experiment"],
             },
      

        experimentDescription:{
                type: String,
             },

        stepName:{ 
            type: String
        },
        stepDescription: { 
            type: String
         },
        // tableName: { 
        //     type: String
        //  },
        // table: {
        //     type: table, 
        //     default: 0
        // }

       },
     {
        timestamps:true,
    }
);
const modelName = "Experiment";
//ExperimentSchema.plugin(uniqueValidator);
const  Experiment = mongoose.model(modelName,ExperimentSchema);
module.exports= Experiment;
