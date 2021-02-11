
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Info from './components/Info';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
     <Route exact path='/signin'  exact component={Signin} /> 
     <Route exact path='/signup'  exact component={Signup} /> 
     <Route exact path='/'  exact component={Home} /> 
     <Route exact path='/info'  exact component={Info} /> 
     </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
