var React = require('react');

class NewStore extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>NewStore!</h1>
            <form action="/stores/new" method="POST">
                <p> Name of store </p>
                <input type="text" name= "storeName"/>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = NewStore;