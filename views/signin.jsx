var React = require('react');

class Signin extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Sign in</h1>
            <form action="/signin" method="POST">
                <h5>Do not have an account? <a href="/signup">Signup</a></h5>
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

module.exports = Signin;