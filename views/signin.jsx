var React = require('react');
var Layout = require('./layouts/layout')

class Signin extends React.Component {
  render() {
    return (
      <Layout>
        <div className="text-center">
            <h1 className="h3-mb3 font-weight-normal">
                Signing in
            </h1>

          <div>
          <div className="row">
            <div className="col"></div>
            <form
                action="/signin"
                method="POST"
            >
                <h5>Do not have an account?
                    <a href="/signup"> Sign-up
                    </a>
                </h5>
                <div className="col-4"></div>
                <div>
                <input
                    className="form-control"
                    type="text"
                    name= "email"
                    placeholder="Email"
                />
                <br></br>
                <input
                    className="form-control"
                    type="password"
                    name= "password"
                    placeholder="Password"
                />
                <br></br>
                <input
                    type="submit"
                    value="Sign in"
                />
                </div>
            </form>
            <div className="col"></div>
          </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Signin;