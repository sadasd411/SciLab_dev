import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Update from './components/Update'
import Detail from './components/ProcedureDetail'
import New from './components/New';
import NewProcedure from './components/ProcedureNew'
import { Router } from '@reach/router';
import ListAllProcedures from './components/ProcedureList'
import ProcedureEdit from './components/ProcedureEdit'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div className="App">
     {/* <Header></Header>
     <List></List> */}
     <Header></Header>
     
     <Dashboard path = "/"></Dashboard>
     <ListAllProcedures path = "/procedures/allProcedures "></ListAllProcedures>
     <Router>
       <NewProcedure path ="/procedure/"></NewProcedure>
       <List path ="/experiments/allExperiments" />
       <New path="/experiment/createExpreiment" /> 
       <Detail path ="/experiment/:id"/>  
       <Update path ="/experiment/:id/edit"/> 
       <ProcedureEdit path = "/procedure/:id/edit"></ProcedureEdit>
     </Router>
    </div>
    
  );
}

export default App;
