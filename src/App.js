import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import NavBar from './components/NavBar'
import PrideEventForm from './components/PrideEventForm'
import Cities from './components/Cities'
import City from './components/City'
import PrideEvent from './components/PrideEvent'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pride-event-form" component={PrideEventForm}/>
          <Route exact path="/cities" component={Cities}/>
          <Route path={`/cities/:city_id/pride-events/:id`} component={PrideEvent}/>
          <Route path={`/cities/:id`} component={City}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
