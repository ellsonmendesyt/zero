import '../node_modules/bootstrap'
import  Navbar from './components/Navbar';
import Home from './components/Home'
import Plano from './components/Plano';
import Calculador from './components/Calculador';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
  
     <Router>
       <Navbar />
       <Switch >
         <Route exact path='/' component={Home}/>
         <Route path='/planos/:id' component={Plano}/>
         <Route path='/calculador' component={Calculador}/>
         
       </Switch>
     </Router>
    
      
     
   
  );
}

export default App;
