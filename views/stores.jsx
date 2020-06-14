var React = require('react');

class Stores extends React.Component {
  render() {
    const listAllStores = this.props.stores.map( (store) => {
        return <p>{store.name}</p>
    })
    return (
      <html>
        <body>
          <div>
            <h1>Stores!</h1>
            {listAllStores}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Stores;