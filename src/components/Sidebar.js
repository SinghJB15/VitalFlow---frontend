import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class Sidebar extends React.Component {
  componentDidMount() {
    // Initialize Materialize Collapsibles
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }

  render() {
    return (
      <ul id="slide-out" className="sidenav sidenav-fixed" style={{paddingTop: "1px"}}>
        <li><div className="user-view">
          <div className="background blue"></div>
          <a href="#user"><span className="white-text name"><strong>VitalFlow</strong></span></a>
        </div></li>
        <li style={{marginBottom: "20px"}}><Link to="/" className="waves-effect">Home</Link></li>
        <li style={{marginBottom: "20px"}}>
          <ul className="collapsible">
            <li>
              <div className="collapsible-header"><i className="material-icons"></i>Sync Device</div>
              <div className="collapsible-body">
                <ul>
                  <li><Link to="/register-device">Register Device</Link></li>
                  <li><Link to="/fitbit">Device</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li style={{marginBottom: "20px"}}>
          <ul className="collapsible">
            <li>
              <div className="collapsible-header"><i className="material-icons"></i>Journals</div>
              <div className="collapsible-body">
                <ul>
                  <li><Link to="/journals">View Journals</Link></li>
                  <li><Link to="/journals/new">Add Journal</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li style={{marginBottom: "20px"}}>
          <ul className="collapsible">
            <li>
              <div className="collapsible-header"><i className="material-icons"></i>Account</div>
              <div className="collapsible-body">
                <ul>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Sidebar;