import { LitElement, html, css } from "lit";
import "./components/GetData";
import "./components/ApiTemplate";


import style from './styles/RickyMortyStyle';

export class RickMortyApiLit extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array },
    };
  }

  static get styles() {
    return [style]
    
    
  }

  constructor() {
    super();

    this.wiki =[];
    
    this.addEventListener("ApiData", (e) => {
      this.wiki = e.detail.data
    });
  }

  render() {
    return html`
      <get-data
        url="https://rickandmortyapi.com/api/character"
        method="GET"
      ></get-data>
      <api-template></api-template>
      ${this.dataTemplate}
    `;
  }



  get dataTemplate() {
    return html`
      ${this.wiki.map(
        (character) => html`
          <div class="card">
            <div class="card-content">
              <h2>${character.name}</h2>
              <img src="${character.img}" />
              <p>${character.species} | ${character.status}</p>
            </div>
          </div>
        `
      )}
    `;
  }
}
