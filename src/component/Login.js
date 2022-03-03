import React from 'react';

export default function Login(){

return (
<div>
 <div id="preloader">
 <img className="logo" src="images/logo1.png" alt="" width="119" height="58"/>
 <div id="status">
     <span></span>
     <span></span>
 </div>
</div>

<div className="login-wrapper" id="login-content">
 <div className="login-content">
     <a href="#" className="close">x</a>
     <h3>Acceso</h3>
     <form method="post" action="#">
         <div className="row">
              <label for="username">
                 Usuario:
                 <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
             </label>
         </div>
        
         <div className="row">
             <label for="password">
                 Contraseña:
                 <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
             </label>
         </div>
         <div className="row">
             <div className="remember">
                 <div>
                     <input type="checkbox" name="remember" value="Remember me"/><span>Recuerdame</span>
                 </div>
                 <a href="#">Olvide mi contraseña ?</a>
             </div>
         </div>
        <div className="row">
             <button type="submit">Acceso</button>
        </div>
     </form>
     <div className="row">
         <p>O via social</p>
         <div className="social-btn-2">
             <a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
             <a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
         </div>
     </div>
 </div>
</div>
<div className="login-wrapper"  id="signup-content">
 <div className="login-content">
     <a href="#" className="close">x</a>
     <h3>inscribirse</h3>
     <form method="post" action="#">
         <div className="row">
              <label for="username-2">
                 Usuario:
                 <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
             </label>
         </div>
        
         <div className="row">
             <label for="email-2">
                 Tu correo:
                 <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
             </label>
         </div>
          <div className="row">
             <label for="password-2">
                 Contraseña:
                 <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
             </label>
         </div>
          <div className="row">
             <label for="repassword-2">
                 Vuelva a escribir la contraseña:
                 <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
             </label>
         </div>
        <div className="row">
          <button type="submit">inscribirse</button>
        </div>
     </form>
 </div>
</div>

</div>
);
}