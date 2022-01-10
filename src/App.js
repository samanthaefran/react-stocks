import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';

import Main from './pages/Main';
import Stocks from './pages/Stocks';
import About from './pages/About';
import Price from './pages/Price';


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/price/:symbol" render={(props) => <Price {...props} />} />
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
