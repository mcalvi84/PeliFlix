import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Blog from "./views/Blog";
import ListadoPeliculas from "./views/ListadoPeliculas";
import Actores from "./views/Actores";
import PageNotFound from "./views/PageNotFound";
import Login from "./component/Login";
import Menu from "./component/Menu";

function App() {
  return (
    //<Route path='*' component={<PageNotFound />} />
    <BrowserRouter>
      <Login />
	  <Menu />
      <div>
        <Switch>
          <Route path="/" exact component={ListadoPeliculas} />
          <Route path="/blog" component={Blog} />
          <Route path="/actores" component={Actores} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
