import './App.css';
import Home from "./components/Home/Home"
import Navbar from './components/Header/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MeetingPage from './components/Home/Meeting/MeetingPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/meetingpage">
            <MeetingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
