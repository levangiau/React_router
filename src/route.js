import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Login from "./component/Login";
import NotFound from "./component/Not-found";

const route = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/product",
    exact: false,
    main: ({ match, location }) => (
      <Product match={match} location={location} />
    ),
  },
  {
    path: "/login",
    exact: false,
    main: ({ location }) => <Login location={location} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default route;
