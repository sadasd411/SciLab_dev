import React,{useEffect,useState} from 'react';
import{Link,navigate,Navigate} from '@reach/router';
import axios from 'axios'

const New = (props) => {
  
        const [experimentName, setExperimentName] = useState("");
        const [experimentDescription, setExperimentDescription] = useState("");
        const [stepName, setStepName] = useState("");
        const [stepDescription, setStepDescription] = useState("");
        const [errs, setErrs] = useState("");
        console.log(props);
        
        const  onSubmitHandler = e => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/experiment/', {
                experimentName,
                experimentDescription,
                stepName,
                stepDescription,
            })
            .then(res=>{
                if(res.data.errors){
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else{
                    console.log(res.data);
                    navigate("/");
                }
            })
            .catch(err=>console.log(err))
            }
            return(
                <div>
                     <div  className ="divInline">
                        <p className="linkToRight"><Link to ={"/"}>back to home</Link></p>
                    </div>
                            
                    <button className="linkToRight"><Link to ={"/procedure/"}>Add Procedure</Link></button>
                    <form className="divBorder" onSubmit={onSubmitHandler}>
                        <div  className="row">
                        <div className="column left">
                            <br />
                            <br />
                            <label>Experiment Name:</label>
                            <input type ="text"
                         
                            onChange= {(e) => setExperimentName(e.target.value)}
                            />
                             {
                                errs.experimentName ? <span className="error-text">{errs.experimentName.message}</span> : null
                              }
                              {
                                  experimentName.length <3 && experimentName.length >0?
                                  <span className="error-text">experimentName &gt; 3 </span>
                                  :null
                              }
                            
                           
                            <label>Experiment Description:</label>
                            <input type ="text"
                            
                            onChange= {(e) => setExperimentDescription(e.target.value)}
                            />
                            {
                                errs.experimentDescription ? <span  className="error-text">{errs.experimentDescription.message}</span> : null
                              }
                               {
                                  experimentDescription.length <3 && experimentDescription.length >0 ?
                                  <span className="error-text">experimentDescription &gt; 3 </span>
                                  :null
                              }
                          
                           
                            <label>Step Name:</label>
                            <input type ="text"
                            onChange= {(e) => setStepName(e.target.value)}
                            />
                            {
                                errs.stepName ? <span  className="error-text">{errs.stepName.message}</span> : null
                              }
                               {
                                  stepName.length <3 && stepName.length >0?
                                <span className="error-text">stepName &gt; 3 </span>
                                  :null
                              }
                              <label>Step description</label>
                            <input type ="text"
                            onChange= {(e) => setStepDescription(e.target.value)}
                            />
                            </div>
                            </div>
                        <div align="left">
                            <button type ="submit"><i class="fas fa-upload"></i>Add Experiment</button>
                      
                        </div>

                    </form>

                </div>
            )
}
export default New;