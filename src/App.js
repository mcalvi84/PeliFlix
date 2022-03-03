import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import Blog from './views/Blog';
import ListadoPeliculas from './views/ListadoPeliculas';
import Actores from './views/Actores';
import PageNotFound from './views/PageNotFound';
import Login from './component/Login';






function App() {
 


  return (
	

	<BrowserRouter>
		<Login />

	<Switch>
		 <Route path="/" exact component={ListadoPeliculas}>  <ListadoPeliculas /> </Route>
		 
		  <Route path="/blog" element={Blog}> <Blog />  </Route>  
		  <Route path="/Actores" exact element={<Actores />} />
			


		  <Route path='*' element={<PageNotFound />} />
			 
		  
	</Switch>
	</BrowserRouter>
  );
}

export default App;
