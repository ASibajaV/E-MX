//Utilizaremos literales de plantilla

function headerRM(){
    return `<header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <nav class="navbar"> <!-- navbar para el link del logo -->
          <section> 
            <a class="navbar-brand" href="/Raices-Ecommerce/src/inicio.html">
              <img src="/Raices-Ecommerce/src/assets/Images/caco.png" alt="Cacomixtle logo" width="100"> <!---->
            </a> 
          </section>        
          <section class="container-flex|">
            <span class="navbar-brand1 mb-0 fs-2  ">Raíces  México</span>
          </section>
        </nav>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <section class="container d-flex flex-column align-items-end h-50 mt-3 " style="
  margin-right: 0px;">  
          <ul class="navbar-nav my-2 my-lg-0" style="--bs-scroll-height: 100px;">
            <li class="nav-item me-2">
              <a class="nav-link" href="/Raices-Ecommerce/src/pages/Lista de productos/catalogo.html">Productos</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="/Raices-Ecommerce/src/pages/Contactanos/contactanos.html">Contáctanos</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="/Raices-Ecommerce/src/pages/Sobre Nosotros/nosotros.html">Nosotros</a>
            </li>
            <a class="nav-item me-2" href="/Raices-Ecommerce/src/pages/Login/login.html">
              <button type="button" class="btn btn-light align-items-end mb-2 rounded-pill"style="
  width: 126px">Iniciar sesión</button>
            </a>
            <a class="nav-item me-2" href="../Login/login.html">
              <button type="button" class="btn btn-dark align-items-end mb-2 rounded-pill" style="
  width: 126px">Registrate</button>
            </a>
          </ul>
            
      <section >
          <form class="d-flex" role="search">
            <input class="form-control me-2 rounded-pill" type="search" placeholder="Buscar..." aria-label="Search">
            <button class="btn btn-light rounded-pill" type="submit">Buscar</button>
          </form>
        
        </div>
       </div>
      </section></section>
    </nav>
      
    </header>`

}

function footerRM(){
    return `<footer class="footer">
      <div class="container">
          <div class="footer-row" id="pie">
              <div class="footer-links">
                  <h4>Sobre Nosotros</h4>
                  <ul role="navigation">
                      <li><a href="#">¿Quiénes somos?</a></li>
                      <li><a href="#">Misión y visión</a></li>
                      <li><a href="#">Involúcrate</a></li>
                      <li><a href="#">Conoce al equipo</a></li>
                  </ul>
              </div>
              <div class="footer-links">
                  <h4>Politíca de privacidad</h4>
                  <ul>
                      <li><a href="#">Política de privacidad</a></li>
                      <li><a href="#">¿Cómo funcionamos?</a></li>
                      <li><a href="#">Asuntos económicos</a></li>
                  </ul>
              </div>
              <div class="footer-links">
                  <h4>Servicio al cliente</h4>
                  <ul>
                      <li><a href="#">Términos y Condiciones</a></li>
                      <li><a href="#">¿Necesitas ayuda?</a></li>
                      <li><a href="#">Métodos de pago</a></li>
                  </ul>
              </div>
              <div class="footer-links">
                  <h4>Aviso de copyright</h4>
                  <ul>
                      <li><a href="#">©2024 Todos los derechos reservados. Raíces-MX® es una marca registrada
                              de
                              E-MX-HANDS.</a></li>
                  </ul>
              </div>
              <div class="footer-links">
                  <h4>Síguenos</h4>
                  <div class="social-link">
                      <a href="#"><i class="fab fa-facebook"></i></a>
                      <a href="#"><i class="fab fa-instagram"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                  </div>
              </div>
          </div>
      </div>
    </footer>`
}

document.getElementById('Header').innerHTML= headerRM();
document.getElementById('Footer').innerHTML= footerRM();