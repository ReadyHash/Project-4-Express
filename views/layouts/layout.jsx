var React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
        </head>
        <body>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">PickMeUp</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/stores">Stores</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/user-order">My order</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/signin">Sign in</a>
                        </li>

                        <li className="nav-item">
                            <form action="/signout?_method=delete" method="POST">
                                <input className="nav-link form-control" type="submit" value="Sign-out"/>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                {this.props.children}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Layout;