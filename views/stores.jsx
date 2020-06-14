var React = require('react');

class Stores extends React.Component {
  render() {
    const listAllStores = this.props.stores.map( (store) => {
        console.log(store.id)
        return <button id="store_button">{store.name}</button>
    })
    return (
      <html>
        <body>
          <div>
            <h1>Stores!</h1>
            {listAllStores}
          </div>
        </body>
        <script type="text/javascript">
            document.getElementById("store_button").onclick = function(){
                location.href = "/stores/1"
            };
        </script>
      </html>
    );
  }
}

module.exports = Stores;