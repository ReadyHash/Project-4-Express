var React = require('react');
var Layout = require('./layouts/layout')

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Layout>

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

      </Layout>
    );
  }
}

module.exports = Home;