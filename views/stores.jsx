var React = require('react');
var Layout = require('./layouts/layout')

class Stores extends React.Component {
  render() {
    const listAllStores = this.props.stores.map( (store) => {

        const url = "/store/" + store.id;
        return <div><a key={store.id} id="store_button" href={url}><p>{store.name}</p></a></div>
    })
    return (
      <Layout>

          <div className="text-center">
            <h1>Stores!</h1>
            <div>
                {listAllStores}
            </div>
          </div>

      </Layout>
    );
  }
}

module.exports = Stores;