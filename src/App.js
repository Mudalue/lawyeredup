
import './App.css';
import Homepage from './Components/Homepage';
import { Switch, Route } from "react-router-dom"
import Aboutus from './Components/HomePageComponents/Aboutus';
import UserNavbar from './Components/DashboardComponent/UserDashboard/UserNavbar';
import Userdashboard from './Components/DashboardComponent/Userdashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/About-us">
        <Aboutus/>
      </Route>
      <Route exact path="/Home">
        <Homepage />
      </Route>
      <Route exact path="/">
        <Userdashboard/>
      </Route>
    </Switch>
  );
}

export default App;
