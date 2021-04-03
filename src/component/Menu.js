import React from "react";
import { NavLink, Route } from "react-router-dom";
//tạo menu động
const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Giới Thiệu",
    to: "/about",
    exact: false,
  },
  {
    name: "Liên Hệ",
    to: "/contact",
    exact: false,
  },
  {
    name: "Sản Phẩm",
    to: "/product",
    exact: false,
  },
  {
    name: "Đăng Nhập",
    to: "/login",
    exact: false,
  },
];
//function customer Menu
const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={`my-li ${active}`}>
            <NavLink to={to} activeClassName="active">
              {lable}
            </NavLink>
          </li>
        );
      }}
    />
  );
};
class Menu extends React.Component {
  showMenu = (menu) => {
    let result = null;
    if (menu.length > 0) {
      result = menu.map((data, index) => {
        return (
          <MenuLink
            key={index}
            lable={data.name}
            to={data.to}
            activeOnlyWhenExact={data.exact}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            {/*--------------------------------------------use-Link --------------------------------------*/}

            {/* 
                sử dụng <a href=""></a>: sẽ reload lại trang  
                <a href="/">Trang Chủ</a>
                sử dụng <Link to=""></Link>: sẽ ko reload lại trang như thẻ a mà chức năng lại tương tự thẻ a 
                <Link to="/">Trang Chủ</Link>
            */}

            {/*<li>
                <Link exact to ="/">Trang Chủ</Link>
            </li>*/}
            {/*<li>
                <Link  to ="/about">Giới Thiệu</Link>
            </li>*/}
            {/*<li>
                <Link exact to ="/contact">Liên Hệ</Link>
            </li>*/}
            {/*--------------------------------------------use-NavLink --------------------------------------*/}

            {/*
               Sử dụng <NavLink to=""></NavLink>: sẽ ko reload lại trang như thẻ a mà chức năng lại tương tự thẻ a
               mà có thêm 1 số chức năng activeClassName,activeStyle,....
               Những chức năng này cho phép người dùng có thể tùy chỉnh CSS lại cho các Menu
            */}

            {/*<li> 
                <NavLink exact to="/" activeClassName="active">
                   Trang chủ
                </NavLink>
            </li>*/}
            {/*<li> 
                <NavLink to="/about" activeClassName="active">
                    Giới thiệu
                </NavLink>
            </li>*/}
            {/*<li> 
                <NavLink to="/contact" activeClassName="active">
                    Liên hệ
                </NavLink>
            </li>*/}
            {/*------------------------------------------use custom Link-------------------------------------*/}
            {/*<MenuLink lable="Trang chủ" to="/" activeOnlyWhenExact={true} />*/}
            {/*<MenuLink
              lable="Giới thiệu"
              to="/about"
              activeOnlyWhenExact={false}
            />*/}
            {/*<MenuLink
              lable="Liên hệ"
              to="/contact"
              activeOnlyWhenExact={false}
            />*/}
            {/*------------------------------------------Menu động-------------------------------------*/}
            {this.showMenu(menus)}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Menu;
