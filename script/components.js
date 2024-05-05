// Nav component

class Nav extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    
    <div class="topnav cream">
    <a href="index.html"
      ><img
        class="nav-logo"
        src="img/GG-logo-symbol-141px-black.png"
        height="30px"
        alt=""/></a>
    <div class="nav-items">
      <a class="nav-item" href="index.html">Hem</a>
      <a class="nav-item" href="ledarskap.html">Ledarskap</a>
      <a class="nav-item" href="kommunikation.html">Kommunikation</a>
      <a class="nav-item" href="kreativitet.html">Kreativitet</a>
      <a class="nav-item" href="contact.html">Kontakt</a>
      <div class="ham-menu">
        <div id="navbar" class="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <label class="hamburger1" for="toggle1">
            <div class="top"></div>
            <div class="meat"></div>
            <div class="bottom"></div>
          </label>
          <div class="nav-menu">
            <a class="link1" href="ledarskap.html">Ledarskap</a>
            <a class="link1" href="kommunikation.html">Kommunikation</a>
            <a class="link1" href="kreativitet.html">Kreativitet</a>
            <a class="link1" href="contact.html">Kontakt</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  }
}

customElements.define('nav-component', Nav);

// Footer component

class Footer extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    
    <div class="cream" id="footer-contact">
      <div class="footer-item">
        <img src="img/icons/1c3ae34c6b.png" height="30px" alt="phone icon">
        <a href="tel:0730-708060">+ 46 (0)730 70 80 60</a>
      </div>
      <div class="footer-item">
        <img src="img/icons/afcad6dc3c.png" height="30px" alt="envelope icon">
        <a href="mailto:info@ggcom.se">info@ggcom.se</a>
      </div>
      <div class="footer-item">
        <img src="img/icons/37f6cee532.png" height="30px" alt="map pin">
        <a href="https://goo.gl/maps/wdKHAjUuVQmHD2Ve6" target="_blank">Torggatan 6 - 268 75 Tågarp</a>
      </div>
    </div>    
          
    <div class="ct bluegray" id="footer-copyright">
      <div>
        <h4> Good Girl Communication AB<h4>
        <h6>Copyright &#169 2023 - Alla rättigheter förbehållna</h6>
      </div>  
    </div>

`;
  }
}

customElements.define("footer-component", Footer);
