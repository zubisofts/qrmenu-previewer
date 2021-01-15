import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preview from './components/preview';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/preview/:id' component={Preview}>
          </Route>
          <Route path='/'>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
