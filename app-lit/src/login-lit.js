import { LitElement, html, css } from "lit-element";
export class LoginLit extends LitElement {
  static get styles() {
    return css`
      .container {
        border: solid 3px #11ce76;
        border-radius: 10px;
        width: 350px;
        height: 400px;
        text-align: center;
      }

      input {
        width: 90%;
        height: 30px;
        margin-top: 8vh;
        border: solid 1px #414141;
        border-top: 0px;
        border-radius: 5px;
      }

      button {
        width: 60%;
        height: 40px;
        background: #11ce76;
        color: #414141;
        border: none;
        border-radius: 6px;
        margin-top: 4vh;
      }
      button:hover {
        background: #0da35d;
        cursor: pointer;
      }
    `;
  }
  render() {
    return html`
      <div class="container">
        <h2>Login LitElement</h2>
        <input id="email" type="email" placeholder="write your email" />
        <input id="password" type="password" placeholder="password" />
        <button @click="${this._login}">Sign in</button>
      </div>
    `;
  }
  _login() {
    const email = this.shadowRoot.querySelector("#email").value;
    const password = this.shadowRoot.querySelector("#password").value;
    
    if(!!email && !!password) {
      this.dispatchEvent(new CustomEvent('sing', { 
        detail: {login: true},
        bubbles: true,
        composed: true
      }));
    }
  }
}

customElements.define("login-lit", LoginLit);
