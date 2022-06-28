import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header';
import Error404 from './errors/error404';
import Stake from './pages/stake';
import SolWalletProvider from './components/wallet';
import './styles/App.css';

function App() {
  return (
    <SolWalletProvider>
      <div className="App">
        <div style={{ outline: 'none' }}>
          <div className="css-1r88i0x">
            <Header />
            <Router>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/stake" />
                </Route>
                <Route exact path="/stake" component={Stake} />
                <Route component={Error404} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </SolWalletProvider>
  );
}

export default App;
