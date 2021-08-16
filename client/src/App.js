import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Update from './components/Update'
import Detail from './components/Details'
import New from './components/New';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
     {/* <Header></Header>
     <List></List> */}
     <Header></Header>
     <Router>
       
      <List path ="/" />
     <New path="/experiment/" /> 
       <Detail path ="/experiment/:id"/>  
      <Update path ="/experiment/:id/edit"/> 
          </Router>
    </div>
    
  );
}

export default App;
