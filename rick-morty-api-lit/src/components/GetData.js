import { LitElement } from 'lit-element';

export class GetData extends LitElement {

  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
    };
  }

  firstUpdated() {
    this.getData();
  }

  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent('ApiData', {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  _dataFormat(data) {
    let characters = [];
    data["results"].forEach((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
      });
    });
    this.data = characters
    this._sendData(this.data);
  }

  getData() {
    fetch(this.url, { method: this.method })
      .then((response) => {
        if(response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {
        this._dataFormat(data);
      })
      .catch((error) => {
        console.warn("Somenthing went wrong", error);
      });
  }
}

customElements.define('get-data', GetData);
