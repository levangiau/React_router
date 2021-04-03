import React from "react";
import { Redirect } from "react-router";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtname: "",
      txtpass: "",
    };
  }
  onChange = (event) => {
    let { target } = event;
    let { name } = target;
    let { value } = target;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    let { txtname, txtpass } = this.state;
    if (txtname === "admin" && txtpass === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtname,
          password: txtpass,
        })
      );
    }
  };
  render() {
    let { txtname, txtpass } = this.state;
    let loginUser = localStorage.getItem("user");
    console.log(loginUser);
    if (loginUser !== null) {
      return <Redirect to="/product" />;
    }
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <legend>Đăng Nhập</legend>

            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                className="form-control"
                name="txtname"
                onChange={this.onChange}
                value={txtname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">PassWord</label>
              <input
                type="password"
                className="form-control"
                name="txtpass"
                onChange={this.onChange}
                value={txtpass}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
