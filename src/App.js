import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./component/Menu";
import routes from "./route";
//
class App extends React.Component {
  showRoute = (route) => {
    let result = null;
    if (route.length > 0) {
      result = route.map((data, index) => {
        return (
          <Route
            key={index}
            path={data.path}
            exact={data.exact}
            component={data.main}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <Router>
        <div className="App">
          {/**Menu */}
          <Menu />
          {/**Cấu hình router */}
          {/** 
            Switch ở react-router giống như switch ở trong thư viện javascript cũng có chức năng rẻ nhánh
            nếu như thỏa điều kiện thì sẽ vào điều kiện đó
          */}
          <Switch>{this.showRoute(routes)}</Switch>
        </div>
      </Router>
    );
  }
}
export default App;
