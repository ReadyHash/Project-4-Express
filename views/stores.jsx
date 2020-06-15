var React = require('react');

class Stores extends React.Component {
  render() {
    const listAllStores = this.props.stores.map( (store) => {
        console.log(store.id)
        const url = "/store/" + store.id;
        return <a key={store.id} id="store_button" href={url}><p>{store.name}</p></a>
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