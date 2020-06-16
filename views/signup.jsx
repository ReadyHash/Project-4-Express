var React = require('react');
var Layout = require('./layouts/layout')

class SignUp extends React.Component {
  render() {
    return (
      <Layout>
            <div className="text-center">
            <h1 className="h3-mb3 font-weight-normal">Create Account</h1>
                <div className="row">
                    <div className="col"></div>

                        <form action="/signup" method="POST">
                            <h5>
                                Already have an account?
                                <a href="/signin"> Sign-in
                                </a>
                            </h5>


                            <input
                                className="form-control"
                                type="text"
                                name= "name"
                                placeholder="Username"
                            />
                            <br></br>
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
                                value="Sign up"
                            />

                        </form>
                        <div className="col"></div>
                </div>
            </div>

      </Layout>
    );
  }
}

module.exports = SignUp;