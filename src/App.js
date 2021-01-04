import logo from './logo.svg';
// import './App.css';
import './styles/App.css';
import Homepage from './components/pages/homepage'
import AlienPage from './components/pages/alienPage'
import ArianaPage from './components/pages/arianaPage'
import BanksyPage from './components/pages/banksyPage'
import BlogPage from './components/pages/blogPage'
import DigweedPage from './components/pages/digweedPage'
import UniversePage from './components/pages/universePage'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/alien' component={AlienPage} />
          <Route path='/ariana' component={ArianaPage} />
          <Route path='/banksy' component={BanksyPage} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/digweed' component={DigweedPage} />
          <Route path='/universe' component={UniversePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;