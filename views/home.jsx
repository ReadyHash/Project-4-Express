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

          <div className="text-center">
            <img
                className="img-fluid"
                src="https://hips.hearstapps.com/housebeautiful.cdnds.net/17/42/1508239345-family-eating-lunch-close-up-of-food-on-wooden-table.jpg">
            </img>
            <h1>Welcome to PickmeUp!</h1>


            <p>where you can order from your local favorite stores and collect them when you're ready</p>

            <a href="/stores"><button className="btn btn-lg btn-warning">View our stores now!</button></a>

            <div>
                <footer>
                    <p>Own a business?
                        <a href="/signup"> Create an Account</a>
                    </p>
                </footer>
            </div>



          </div>

      </Layout>
    );
  }
}

module.exports = Home;