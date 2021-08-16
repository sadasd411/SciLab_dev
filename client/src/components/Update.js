import React,{useEffect,useState} from 'react'
import{Link,navigate,Navigate} from '@reach/router';
import axios from 'axios'

const Update = (props) => {
  
        const [experimentName, setExperimentName] = useState("");
        const [experimentDescription, setExperimentDescription] = useState("");
        const [stepName, setStepName] = useState("");
        const [stepDescription, setStepDescription] = useState("");
        const [errs,setErrs] = useState("");
        console.log(props);
        
        useEffect(() => {
            axios.get("http://localhost:8000/api/experiment/" + props.id)
                .then(res =>{
                   console.log(res.data)
                   setExperimentName(res.data.experimentName);
                   setExperimentDescription(res.data.experimentDescription);
                   setStepName(res.data.stepName);
                   setStepDescription(res.data.stepDescription);
                } )
        }, [])
        const  onSubmitHandler = e => {
            e.preventDefault();
            axios.put("http://localhost:8000/api/experiment/" + props.id , {
                experimentName,
                experimentDescription,
                stepName,
                stepDescription,
            })
            .then(res=>{
                console.log(res.data.errors)
                if(res.data.errors){
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else{
                    console.log(res.data);
                    navigate("/experiment/"+props.id);
                }
            })
            .catch(err=>console.log(err))
            }
            return(
                <div>
                     <div  className ="divInline">
                        <h1>SciLab</h1>
                        <p className="linkToRight"><Link to ={"/"}>back to home</Link></p>
                    </div>
                    
                    <form className="divBorder" onSubmit={onSubmitHandler}>
                        <div  className="row">
                        <div className="column left">
                            <br />
                            <br />
                            <label>Experiment Name:</label>
                            <input type ="text"
                            value ={experimentName}
                            onChange= {(e) => setExperimentName(e.target.value)}
                            />
                             {
                                errs.experimentName ? <span className="error-text">{errs.experimentName.message}</span> : null
                              }
                              {
                                  experimentName.length <3 && experimentName.length >0?
                                  <span className="error-text">Experiment Name &gt; 3 </span>
                                  :null
                              }
                            
                           
                            <label>Experiment Description:</label>
                            <input type ="text"
                            value ={experimentDescription}
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
                          
                           
                            <label>Step Name :</label>
                            <input type ="text"
                            value ={stepName}
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
                              <label>Step Description:</label>
                            <input type ="text"
                            value ={stepDescription}
                            onChange= {(e) => setStepDescription(e.target.value)}
                            />
                            </div>
                            </div>
                        <div align="center">
                            <button type ="submit" >Edit Experiment</button>
                        </div> 
                        </form>

</div>

                
            )
}
export default Update;