import React from 'react';


export default function PageWrapper(props){

	console.log(props.showSidebar);
     return (
        <div>	
     
<header className="ht-header">
	<div className="container">
		<nav className="navbar navbar-default navbar-custom">
				<div className="navbar-header logo">
				    <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					    <span className="sr-only">Toggle navigation</span>
					    <div id="nav-icon1">
							<span></span>
							<span></span>
							<span></span>
						</div>
				    </div>
				    <a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58"/></a>
			    </div>
				<div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav flex-child-menu menu-left">
						<li className="hidden">
							<a href="#page-top">hidden</a>
						</li>
						<li className="dropdown first">
							<a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
							Inicio <i className="fa fa-angle-down" aria-hidden="true"></i>
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="index-2.html">Inicio 01</a></li>
								<li><a href="homev2.html">Inicio 02</a></li>
								<li><a href="homev3.html">Inicio 03</a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a href="/ListadoPeliculas" className="btn btn-default lv1">
							películas
							</a>
							
						</li>
						
						<li className="dropdown first">
							<a href="/Blog" className="btn btn-default lv1">
							Blog
							</a>
							
						</li>
						<li className="dropdown first">
							<a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							Actores <i className="fa fa-angle-down" aria-hidden="true"></i>
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="/Actores">Guia de Actores</a></li>
								<li><a href="userfavoritelist.html">lista favorita</a></li>
								<li><a href="userprofile.html">perfil USUARIO</a></li>
								<li className="it-last"><a href="userrate.html">calificación</a></li>
							</ul>
						</li>
					</ul>
					<ul className="nav navbar-nav flex-child-menu menu-right">
						               
						<li><a href="#">Ayuda</a></li>
						<li className="loginLink"><a href="#">INGRESO</a></li>
						<li className="btn signupLink"><a href="#">Registrar</a></li>
					</ul>
				</div>
				    </nav>
	    	    
	    <div className="top-search">
	    	<select>
				<option value="united">Programa TV</option>
				<option value="saab">Otros</option>
			</select>
			<input type="text" placeholder="Busque una película, un programa de televisión o la celebridad que esté buscando"/>
	    </div>
	</div>
</header>

<div className="hero common-hero">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="hero-ct">
					<h1> Lista de Películas - listado</h1>
					<ul className="breadcumb">
						<li className="active"><a href="#">Inicio</a></li>
						<li> <span className="ion-ios-arrow-right"></span> lista de películas</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="page-single movie_list">
	<div className="container">
		<div className="row ipad-width2">
			<div className="col-md-8 col-sm-12 col-xs-12">
				<div className="topbar-filter">
					<p>Encontradas <span>15 películas</span> en total</p>
					<label>Ordenar por:</label>
					<select>
						<option value="popularity">Popularidad Descendente</option>
						<option value="popularity">Popularidad Ascendente</option>
						<option value="rating">Rating Descendente</option>
						<option value="rating">Rating Ascendente</option>
						<option value="date">Fecha de lanzamiento Descendente</option>
						<option value="date">Fecha de lanzamiento Ascendente</option>
					</select>
					<a href="movielist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
					<a  href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
				</div>
				
				{props.children}
  
		<div class="topbar-filter">
					<label>Películas por página:</label>
					<select>
						<option value="range">5 Películas</option>
						<option value="saab">10 Películas</option>
					</select>
					<div class="pagination2">
						<span>Página 1 of 2:</span>
						<a class="active" href="#">1</a>
						<a href="#">2</a>
						<a href="#"><i class="ion-arrow-right-b"></i></a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-12 col-xs-12">
				{props.showSidebar&&
				<div className="sidebar">
					<div className="searh-form">
						<h4 className="sb-title">Buscador de Películas</h4>
						<form className="form-style-1" action="#">
							<div className="row">
								<div className="col-md-12 form-it">
									<label>Nombre de la Película</label>
									<input type="text" placeholder="Ingrese la palabra clave"/>
								</div>
								<div className="col-md-12 form-it">
									<label>Genero & Subgenero</label>
									<div className="group-ip">
										<select
											name="skills" multiple="" className="ui fluid dropdown">
											<option value="">Enter to filter genres</option>
											<option value="Action1">Action 1</option>
					                        <option value="Action2">Action 2</option>
					                        <option value="Action3">Action 3</option>
					                        <option value="Action4">Action 4</option>
					                        <option value="Action5">Action 5</option>
										</select>
									</div>
									
								</div>
								<div className="col-md-12 form-it">
									<label>Rango Estrellas</label>
									
									 <select>
										<option value="range">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
									</select>
									
								</div>
								<div className="col-md-12 form-it">
									<label>Rango de Busqueda</label>
									<div className="row">
										<div className="col-md-6">
											<select>
												<option value="range">Desde</option>
												<option value="number">10</option>
												<option value="number">20</option>
												<option value="number">30</option>
											</select>
										</div>
										<div className="col-md-6">
											<select>
												<option value="range">Hasta</option>
												<option value="number">20</option>
												<option value="number">30</option>
												<option value="number">40</option>
											</select>
										</div>
									</div>
								</div>
								<div className="col-md-12 ">
									<input className="submit" type="submit" value="buscar"/>
								</div>
							</div>
						</form>
					</div>
					<div className="ads">
						<img src="images/uploads/ads1.png" alt=""/>
					</div>
					<div className="sb-facebook sb-it">
						<h4 className="sb-title">Encuentranos en Facebook</h4>
						<iframe title="EncuentraFb" src="#" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"  height="315"  ></iframe>
					</div>
					<div className="sb-twitter sb-it">
						<h4 className="sb-title">Tweeteanos</h4>
						<div className="slick-tw">
							<div className="tweet item" id=""></div>
							<div className="tweet item" id=""></div>
						</div>							
					</div>
				</div>  }
			</div> 
		</div>
	</div>
</div>

<footer className="ht-footer">
	<div className="container">
		<div className="flex-parent-ft">
			<div className="flex-child-ft item1">
				 <a href="index-2.html"><img className="logo" src="images/logo1.png" alt=""/></a>
				 <p>Av. Santa Fé 2520, CABA<br/>
				Buenos Aires, Argentina</p>
				<p>Llamanos: <a href="#">(+54) 4500 5000</a></p>
			</div>
			<div className="flex-child-ft item2">
				<h4>Recursos</h4>
				<ul>
					<li><a href="#">Sobre</a></li> 
					<li><a href="#">Blockbuster</a></li>
					<li><a href="#">Contactanos</a></li>
					<li><a href="#">Foros</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Centro de Ayuda</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item3">
				<h4>Legal</h4>
				<ul>
					<li><a href="#">Terminos y Condiciones</a></li> 
					<li><a href="#">Politica Privacidad</a></li>	
					<li><a href="#">Seguridad</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item4">
				<h4>Cuenta</h4>
				<ul>
					<li><a href="#">Mi cuenta</a></li> 
					<li><a href="#">Mi lista</a></li>	
					<li><a href="#">Mi colección</a></li>
					<li><a href="#">Guia de Usuario</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item5">
				<h4>Newsletter</h4>
				<p>Suscribite a nuestro sistema de newsletter ahora <br/> para obtener las ultimas noticias</p>
				<form action="#">
					<input type="text" placeholder="Ingrese su email..."/>
				</form>
				<a href="#" className="btn">Subscribite ya<i className="ion-ios-arrow-forward"></i></a>
			</div>
		</div>
	</div>
	<div className="ft-copyright">
		<div className="ft-left">
			<p><a target="_blank" rel="noopener noreferrer" href="https://www.templateshub.net">Templates Hub</a></p>
		</div>
		<div className="backtotop">
			<p><a href="#" id="back-to-top">Volver arriba <i className="ion-ios-arrow-thin-up"></i></a></p>
		</div>
	</div>
</footer>
</div>
  );


      }