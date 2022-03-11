import React from 'react'

function Menu() {
  return (
    <>
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
    </>
  )
}

export default Menu