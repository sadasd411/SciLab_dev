import React,{useEffect,useState} from 'react'
import{Link,navigate, Router} from '@reach/router';
import axios from 'axios'


const Dashboard = (props) => {
    const [allExperiments, setAllExperiments] = useState([]);
    
    
    const allStatus = [
        "New Request",
        "In Queue",
        "In Process",
        "Completed"
    ]

    useEffect(() =>{
        axios.get("http://localhost:8000/api/experiments")
        .then((res) =>{
            console.log(res.data)
            setAllExperiments(res.data);
           
                   })
        .catch((err) =>
        console.log(err));
    },[]);
    
    return(
        
        <div>
            <div>
                <p>Assigned To me | All</p>

                <table>
                    <thead>
                    <th>Experiment Name </th>
                    <th>Experiment Staus</th>
                    </thead>
                    <tbody>
                    { allExperiments.map((experiment,index) => (
                        <tr >
                            <td>
                            <Link to ={`/experiment/${experiment._id}`}>{experiment.experimentName} </Link>
                             </td>
                             <td>
                                 {allStatus[0]}
                              {/* {experiment.experimentDescription} */}
                             </td>
                            
                        </tr>
                ))}
                            
                    </tbody>
                  </table>
            </div>
        </div>)
}
export default Dashboard;
