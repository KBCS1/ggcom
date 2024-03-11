// Footer component

class Footer extends HTMLElement {

  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {

    this.innerHTML = `
    <div id="footer" class="footer">
      <div class="contact-info" id="contact-phone">
        <div><img src="img/phone-svgrepo-com.svg" alt="phone"></div>
        <span>+46 706 976 976</span>
      </div>
      <div class="contact-info" id="contact-email">
        <div><img src="img/mail-svgrepo-com.svg" alt="mail"></div>
        <span>info@kompis.se</span>
      </div>
      <div class="contact-info" id="contact-address">
        <div><img src="img/address-svgrepo-com.svg" alt="mail"></div>
        <span>Stenestad 1791<br>SE-268 76 Kågeröd</span>
      </div>
    </div>
    `
  };
};

customElements.define('footer-component', Footer);