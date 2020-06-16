var React = require('react');

class StorePage extends React.Component {
  render() {

    const storename = this.props.store[0].name

    const foodElement = this.props.foods.map( (food) => {
        const foodId = food.id;

        return <div> <label for={food.id}>{food.name}</label> <input type="checkbox" id={food.id} name="user id" value={food.id}/> </div>
    })
    return (
      <html>
        <body>
          <div>
            <h1>Welcome to {storename}'s store </h1>

            <form id="foodlist" action="/order/:id" method="POST">
                {foodElement}
                <input type="submit"/>
            </form>

            <div>
                <a href="/stores"> go back </a>

                <a href="/"> home </a>
            </div>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = StorePage;