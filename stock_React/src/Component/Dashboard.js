import React from "react";
import { Link } from "react-router-dom";
import "./css/dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div id="body">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "100px" }}>
              <div className="col-md-8">
                <img
                  src={require("./images/group.png")}
                  className="img-responsive"
                  style={{ height: "383px" }}
                />
              </div>
              <div className="col-md-4">
                <div className="login-page" style={{ marginTop: "10px" }}>
                  <div className="form">
                    <h2
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                        marginTop: "-5px"
                      }}
                    >
                      Login Here
                    </h2>
                    <form
                      className="login-form"
                      action="dologin"
                      method="post"
                      style={{ marginTop: "45px" }}
                      autoComplete="off"
                    >
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                      />
                      <p style={{ color: "red" }} />
                      {/* <Link to="MaterialEntry">
                        <input
                          type="submit"
                          name="submit"
                          defaultValue="Login"
                          id="btn"
                        />
                      </Link> */}
                      <Link to="MaterialEntry">jkkk</Link>
                      {/* <button class="btn btn-primary btn-outline btn-lg" style="border-radius: 4px;" type="submit" name="submit">Submit</button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
