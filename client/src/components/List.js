import React,{useEffect,useState} from 'react'
import{Link,navigate, Router} from '@reach/router';
import axios from 'axios'


const ListAll = (props) => {
    const [allExperiments, setAllExperiments] = useState([]);
    
    
    

    useEffect(() =>{
        axios.get("http://localhost:8000/api/experiments")
        .then((res) =>{
            console.log(res.data);
            setAllExperiments(res.data);
           
                   })
        .catch((err) =>
        console.log(err));
    },[]);
    
    return(
        
        <div>
            <div>
                <button className="linkToRight"><Link to ={"/experiment"}>Add Experiment</Link></button>
                <table>
                    <thead>
                    <th>Name </th>
                    <th>Description</th>
                    <th>Actions avaiable</th>
                    </thead>
                    <tbody>
                    { allExperiments.map((experiment,index) => (
                        <tr>
                            <td>
                            {experiment.experimentName}
                             </td>
                             <td>
                              {experiment.experimentDescription}
                             </td>
                            <td>
                            <Link to ={`/experiment/${experiment._id}`}>details </Link>
                            <span>|</span>
                            <Link to ={`/experiment/${experiment._id}/edit`}> edit</Link>
                            </td>
                        </tr>
                ))}
                            
                    </tbody>
                  </table>
            </div>
        </div>)
}
export default ListAll;
