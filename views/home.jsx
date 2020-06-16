var React = require('react');
var Layout = require('./layouts/layout')

class Home extends React.Component {
  render() {
    console.log(this.props);
    const status = this.props.isLoggedIn

    const somefunc = () => {
        if(status == true){
            const signoutEl = <button>signout</button>
        }
    }
    somefunc()
    return (
      <Layout>

          <div>
            <h1>Home!</h1>

            <div>
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