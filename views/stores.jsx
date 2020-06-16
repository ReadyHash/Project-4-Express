var React = require('react');
var Layout = require('./layouts/layout')

class Stores extends React.Component {
  render() {
    const listAllStores = this.props.stores.map( (store) => {

        const url = "/store/" + store.id;
        return <div class="col-sm-3"><a key={store.id} id="store_button" href={url}><div class="card"><div class="card-body"><p>{store.name}</p></div></div></a></div>
    })
    return (
      <Layout>

          <div className="text-center">
            <h1>Order from our local stores!</h1>
            <div className="row">
                {listAllStores}
            </div>
          </div>

      </Layout>
    );
  }
}

module.exports = Stores;