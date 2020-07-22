import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Rate from '../Rate/Rate';
import About from '../About/About';
import Points from '../Points/Points';
import ErrorPage from '../ErrorPage/ErrorPage';
import Cookie from '../Cookie/Cookie';

class App extends React.Component {
  render() {
    let nav = {
      '/' : 'Главная',
      '/points' : 'Пункты обмена',
      '/about' : 'О нас'
    }
    return (
      <div className="site">
        <Header nav={nav}/>
      
      <div className="container">
        <main>
          <Router>
            <Switch>
              <Route exact path='/' component={Rate} />
              <Route exact path='/about' component={About} />
              <Route exact path='/points' component={Points} />
              <Route component={ErrorPage} />
            </Switch>
          </Router>
        </main>
      </div>

      <Cookie />

      <Footer nav={nav}/>
    </div>
    );
  }
}

export default App;
