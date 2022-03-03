import React from 'react';


export default function Actores(){
	
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
 
 <div>
      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1>Listado de Actores - Lista</h1>
                <ul className="breadcumb">
                  <li className="active">
                    <a href="#">Inicio</a>
                  </li>
                  <li>
                    {" "}
                    <span className="ion-ios-arrow-right"></span> Listado de actores
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="ceb-item-style-2">
                    <img src="images/uploads/ceblist1.jpg" alt="" />
                    <div className="ceb-infor">
                      <h2>
                        <a href="celebritysingle.html">Dan Stevens</a>
                      </h2>
                      <span>actor, usa</span>
                      <p>
                        Dan Stevens was born at Croydon in Surrey on 10th
                        October 1982. His parents are teachers. He was educated
                        at Tonbridge School and trained in acting at the
                        National Youth Theatre of Great Britain...{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="ceb-item-style-2">
                    <img src="images/uploads/ceblist2.jpg" alt="" />
                    <div className="ceb-infor">
                      <h2>
                        <a href="celebritysingle.html">Luke Evans</a>
                      </h2>
                      <span>actor, mexico</span>
                      <p>
                        Luke George Evans was born in Pontypool, Wales, and grew
                        up in Aberbargoed, in the south of Wales. He is the son
                        of Yvonne (Lewis) and David Evans. He moved to Cardiff
                        at the age 17...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="ceb-item-style-2">
                    <img src="images/uploads/ceblist3.jpg" alt="" />
                    <div className="ceb-infor">
                      <h2>
                        <a href="celebritysingle.html">Scarlett Johansson</a>
                      </h2>
                      <span>actress, france</span>
                      <p>
                        Scarlett Ingrid Johansson was born in New York City. Her
                        mother, Melanie Sloan, is from a Jewish family from the
                        Bronx, and her father, Karsten Johansson, is a
                        Danish-born architect, from Copenhagen...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="ceb-item-style-2">
                    <img src="images/uploads/ceblist4.jpg" alt="" />
                    <div className="ceb-infor">
                      <h2>
                        <a href="celebritysingle.html">Emma Watson</a>
                      </h2>
                      <span>actress, uk</span>
                      <p>
                        Emma Charlotte Duerre Watson was born in Paris, France,
                        to English parents, Jacqueline Luesby and Chris Watson,
                        both lawyers. She moved to Oxfordshire when she was
                        five...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="ceb-item-style-2">
                    <img src="images/uploads/ceblist5.jpg" alt="" />
                    <div className="ceb-infor">
                      <h2>
                        <a href="celebritysingle.html">Tom Hardy</a>
                      </h2>
                      <span>actor, italy </span>
                      <p>
                        Joan Crawford was born Lucille Fay LeSueur on March 23,
                        1905, in San Antonio, Texas, to Anna Belle (Johnson) and
                        Thomas E. LeSueur, a laundry laborer. By the time she
                        was born her parents had separated....
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="ceb-item-style-2">
                    <img src="images/uploads/ceblist6.jpg" alt="" />
                    <div className="ceb-infor">
                      <h2>
                        <a href="celebritysingle.html">Joan Crawford</a>
                      </h2>
                      <span>director, sweden</span>
                      <p>
                        Joan Crawford was born Lucille Fay LeSueur on March 23,
                        1905, in San Antonio, Texas, to Anna Belle (Johnson) and
                        Thomas E. LeSueur, a laundry laborer. By the time she
                        was born her parents had separated....
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="ceb-item-style-2">
                    <img src="images/uploads/ceblist7.jpg" alt="" />
                    <div className="ceb-infor">
                      <h2>
                        <a href="celebritysingle.html">Margot Robbie</a>
                      </h2>
                      <span>actress, chile</span>
                      <p>
                        Margot Robbie is an Australian actress born in Dalby,
                        Queensland, and raised on the Gold Coast, spending much
                        of her time at the farm belonging to her grandparents.
                        Her mother, Sarie Kessler, is a physiotherapist....
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="ceb-item-style-2">
                    <img src="images/uploads/ceblist8.jpg" alt="" />
                    <div className="ceb-infor">
                      <h2>
                        <a href="celebritysingle.html">Jason Momoa</a>
                      </h2>
                      <span>actor, usa</span>
                      <p>
                        Joseph Jason Namakaeha Momoa was born on August 1, 1979
                        in Honolulu, Hawaii. He is the son of Coni (Lemke), a
                        photographer, and Joseph Momoa, a painter...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Search celebrity</h4>
                  <form className="form-style-1 celebrity-form" action="#">
                    <div className="row">
                      <div className="col-md-12 form-it">
                        <label>Celebrity name</label>
                        <input type="text" placeholder="Enter keywords" />
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Celebrity Letter</label>
                        <select>
                          <option value="range">A</option>
                          <option value="saab">B</option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Category</label>
                        <select>
                          <option value="range">Actress</option>
                          <option value="saab">Others</option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Year of birth</label>
                        <div className="row">
                          <div className="col-md-6">
                            <select>
                              <option value="range">1970</option>
                              <option value="number">Other</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select>
                              <option value="range">1990</option>
                              <option value="number">others</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <input
                          className="submit"
                          type="submit"
                          value="submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="ads">
                  <img src="images/uploads/ads1.png" alt="" />
                </div>
                <div className="celebrities">
                  <h4 className="sb-title">featured celebrity</h4>
                  <div className="celeb-item">
                    <a href="#">
                      <img src="images/uploads/ava1.jpg" alt="" />
                    </a>
                    <div className="celeb-author">
                      <h6>
                        <a href="#">Samuel N. Jack</a>
                      </h6>
                      <span>Actor</span>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <a href="#">
                      <img src="images/uploads/ava2.jpg" alt="" />
                    </a>
                    <div className="celeb-author">
                      <h6>
                        <a href="#">Benjamin Carroll</a>
                      </h6>
                      <span>Actor</span>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <a href="#">
                      <img src="images/uploads/ava3.jpg" alt="" />
                    </a>
                    <div className="celeb-author">
                      <h6>
                        <a href="#">Beverly Griffin</a>
                      </h6>
                      <span>Actor</span>
                    </div>
                  </div>
                  <div className="celeb-item">
                    <a href="#">
                      <img src="images/uploads/ava4.jpg" alt="" />
                    </a>
                    <div className="celeb-author">
                      <h6>
                        <a href="#">Justin Weaver</a>
                      </h6>
                      <span>Actor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </div>
	  </div>		
  );
	}
	
		