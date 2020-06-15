var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Home!</h1>
            <a href="/stores">make an order!</a>
            <p>Own a business? <a href=
            "/signup">signup</a> now!</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;