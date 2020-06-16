var React = require('react');
var Layout = require('./layouts/layout')

class StorePage extends React.Component {
  render() {

    const storename = this.props.store[0].name

    const foodElement = this.props.foods.map( (food) => {
        const foodId = food.id;

        return <div> <label for={food.id}>{food.name}</label> <input type="checkbox" id={food.id} name="userCart" value={food.id}/> </div>
    })
    return (
      <Layout>
          <div>
            <h1>Welcome to {storename}'s store </h1>

            <form id="foodlist" action="/user-order" method="POST">
                {foodElement}
                <input type="submit"/>
            </form>

            <div>
                <a href="/stores"> go back </a>

                <a href="/"> home </a>
            </div>

          </div>
      </Layout>
    );
  }
}

module.exports = StorePage;