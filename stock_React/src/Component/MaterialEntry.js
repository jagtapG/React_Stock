import React from "react";
import Sidebar from "./Sidebar";

class MaterialEntry extends React.Component {
  render() {
    return (
      <div>
        {/* Material Design Lite */}
        <link
          rel="stylesheet"
          href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"
        />
        {/* Material Design icon font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        {/* Always shows a header, even in smaller screens. */}
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              {/* Title */}
              <span className="mdl-layout-title">Title</span>
              {/* Add spacer, to align navigation to the right */}
              <div className="mdl-layout-spacer" />
              {/* Navigation. We hide it in small screens. */}
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href>
                  Link
                </a>
                <a className="mdl-navigation__link" href>
                  Link
                </a>
                <a className="mdl-navigation__link" href>
                  Link
                </a>
                <a className="mdl-navigation__link" href>
                  Link
                </a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href>
                Link
              </a>
              <a className="mdl-navigation__link" href>
                Link
              </a>
              <a className="mdl-navigation__link" href>
                Link
              </a>
              <a className="mdl-navigation__link" href>
                Link
              </a>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">{/* Your content goes here */}</div>
          </main>
        </div>
      </div>
    );
  }
}

export default MaterialEntry;
