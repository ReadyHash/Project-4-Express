var React = require('react');

class StorePage extends React.Component {
  render() {
    console.log(this.props.store[0].name);
    const storename = this.props.store[0].name

    const foodElement = this.props.foods.map( (food) => {
        return <p>{food.name}</p>
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