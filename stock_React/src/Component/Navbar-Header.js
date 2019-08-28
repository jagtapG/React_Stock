import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="page-topbar ">
        <nav className="navbar navbar-expand-lg  ">
          {/* Navbar brand */}

          <div className="logo-area">
            <a href>
              <img
                src={require("./images/vasantha-group2.jpg")}
                width={300}
                height={60}
              />
            </a>
          </div>
          {/* Collapse button */}
          <div className="md-form my-0">
            <ul
              style={{
                marginLeft: "10px",
                marginTop: "10px",
                fontSize: "16px"
              }}
            >
              <li>
                <a href="{{url('logout')}}">
                  <span className="glyphicon glyphicon-log-out" /> Logout
                </a>
              </li>
              <li>
                <a href="{{url('help')}}">
                  <span className="glyphicon glyphicon-question-sign" /> Help
                </a>
              </li>
            </ul>
          </div>

          {/* Collapsible content */}

          {/* Collapsible content */}
        </nav>
      </div>
    );
  }
}

export default Navbar;
