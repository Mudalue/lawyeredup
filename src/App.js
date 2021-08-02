
import './App.css';
import Homepage from './Components/Homepage';
import { Switch, Route } from "react-router-dom"
import Aboutus from './Components/HomePageComponents/Aboutus';
import UserNavbar from './Components/DashboardComponent/UserDashboard/UserNavbar';
import Userdashboard from './Components/DashboardComponent/Userdashboard';
import LawyerNavbar from './Components/DashboardComponent/Lawyerdashboard/LawyerNavbar';
import Lawyersdash from './Components/DashboardComponent/Lawyersdash';
import CaseInfo from './Components/Others/CaseInfo';
import Contact from './Components/Others/Contact';
import Login from './Components/Others/Login';
import Signin from './Components/Others/Signin';

function App() {
  return (
    <Switch>
      <Route exact path="/Signin">
        <Signin/>
      </Route>
      <Route exact path="/Login">
        <Login/>
      </Route>
          <Route exact path="/contact-us">
        <Contact/>
      </Route>
            <Route exact path="/case-information">
        <CaseInfo/>
      </Route>
       <Route exact path="/user-dashboard">
        <Userdashboard/>
      </Route>
      <Route exact path="/About-us">
        <Aboutus/>
      </Route>
      <Route exact path="/lawyer-dashboard">
        <Lawyersdash/>
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      
    </Switch>
  );
}

export default App;
