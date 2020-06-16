var React = require('react');
var Layout = require('./layouts/layout')

class StorePage extends React.Component {
  render() {

    const storename = this.props.store[0].name

    const foodElement = this.props.foods.map( (food) => {
        const foodId = food.id;

        return <div className="rows col"> <label for={food.id}>{food.name}</label> <input type="checkbox" id={food.id} name="userCart" value={food.id}/> </div>
    })
    return (
      <Layout>
          <div className="text-center">
            <h1>Welcome to {storename}</h1>

            <form id="foodlist" action="/user-order" method="POST">
                {foodElement}
                <input type="submit"/>
            </form>

          </div>
      </Layout>
    );
  }
}

module.exports = StorePage;