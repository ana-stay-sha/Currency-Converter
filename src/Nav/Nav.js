import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  
  render() {
    const nav = this.props.nav;
    return (
          <div className="header-nav">
              <div className="container">
                  <nav>
                      <ul>
                      {Object.keys(nav).map(elem => {
                        return <li key={elem}><a href={elem}>{nav[elem]}</a></li>
                      })}
                      </ul>
                  </nav>
              </div>
          </div>
    );
  }
}

export default Nav;
