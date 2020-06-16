var React = require('react');

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <html>
        <body>
          <div>
            <h1>Home!</h1>
            <div>
                <form action="/signout?_method=delete" method="POST">
                    <input type="submit" value="Sign-out"/>
                </form>
                <p>Own a business?
                    <a href="/signup"> Create an Account</a>
                </p>
            </div>

            <a href="/stores">make an order!</a>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;