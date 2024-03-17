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
