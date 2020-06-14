var React = require('react');

class SignUp extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Create Account</h1>
            <form action="/signup" method="POST">
                <h5>Already have an account? Login</h5>
                <p>First Name</p>
                <input type="text" name= "name"/>
                <p>Email</p>
                <input type="text" name= "email"/>
                <p>Password</p>
                <input type="text" name= "password"/>

                <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = SignUp;