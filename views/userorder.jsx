var React = require('react');
var Layout = require('./layouts/layout')

class UserOrder extends React.Component {
  render() {



    const foodElement = this.props.order.map( (food) => {
        const foodId = food.id;

        return <div className="col p-3 border bg-light">{food.name}</div>
    })
    return (
      <Layout>
          <div className="text-center">
            <h1>Checking out...</h1>
            <p>Please confirm your order below before checking out</p>
            <div className="row">
                <div className="col"></div>
                <div>{foodElement}</div>
                <div className="col"></div>
            </div>
            <div className="row col">
                <form className="col" id="checkout_list" action="/order" method="POST">
                    <input className="form-control" type="submit" value="Confirm"/>
                </form>
                <form className="col" id="checkout_remove" action="checklist?_method=delete" method="POST">
                    <input className="form-control" type="submit" value="reset order"/>
                </form>
            </div>
          </div>
      </Layout>
    );
  }
}

module.exports = UserOrder;