class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = 'Daniel Quirino';
  }
}

window.customElements.define('user-card', UserCard);