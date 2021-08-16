import React, { useEffect, useState } from 'react'
import{Link, navigate} from '@reach/router';
import axios from 'axios';

const Detail = (props) => {
const [detail, setDetail] = useState({});
console.log(props);

const deleteExperiment = (experimentId) =>{
    axios.delete("http://localhost:8000/api/experiment/" +experimentId)
    .then((res) => {
        console.log(res.data);
      navigate('/');
    })
    .catch((err) => console.log(err) )
}
useEffect(() => {
        axios.get("http://localhost:8000/api/experiment/" + props.id)
            .then(res =>{
               console.log(res.data)
               setDetail(res.data)
            } )
    }, [])
    return (
        <div>
            <div className ="divInline">
                <p>Details about:{detail.experimentName}</p>
                <p className="linkToRight"><Link to ={"/"}>back to home</Link></p>
                
            </div>
            <div className="divBorder">
                <p>&nbsp;&nbsp;Experiment Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{detail.experimentName} </p>
                <p>&nbsp;Experiment description:&nbsp;&nbsp;&nbsp;{detail.experimentDescription}</p>
                <p>&nbsp;&nbsp;  Step name:&emsp;{detail.stepName} </p>
                <p>&nbsp;&nbsp;  Step description:&emsp;{detail.stepDescription} </p>
             </div>
             <button  onClick ={() => deleteExperiment(detail._id)}>&#9750;Delete {detail.experimentName}</button>
        </div>
    )
}
export default Detail;