var React = require('react');
var Layout = require('./layouts/layout')

class NewStore extends React.Component {
  render() {
    return (
      <Layout>
          <div>
            <h1>NEW</h1>
            <form action="/stores/new" method="POST">
                <p> Please create your store </p>
                <input type="text" name= "storeName"/>
                <input type="submit" value="Submit"/>
            </form>
          </div>
      </Layout>
    );
  }
}

module.exports = NewStore;