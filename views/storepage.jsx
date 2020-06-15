var React = require('react');

class StorePage extends React.Component {
  render() {
    console.log(this.props.store[0]);
    const storename = this.props.store[0].name

    const foodElement = this.props.foods.map( (food) => {
        const foodId = food.id;

        return <a key={food.id} ><p>{food.name}</p></a>
    })
    return (
      <html>
        <body>
          <div>
            <h1>Welcome to {storename}'s store </h1>
            {foodElement}
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