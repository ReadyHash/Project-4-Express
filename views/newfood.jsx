var React = require('react');

class NewFood extends React.Component {
  render() {
    console.log(this.props.store);
    const allStoresElement = this.props.store.map(store =>{
        return <option key ={store.id} value={store.id}>{store.name}</option>
    })

    return (
      <html>
        <body>
          <div>
            <h1>FOOD</h1>

            <form action="/foods/new" method="POST">
                <p> Please add a food to your store </p>

                <input type="text" name= "foodName"/><br></br>
                <select name="store_id">{allStoresElement}</select>

                <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = NewFood;