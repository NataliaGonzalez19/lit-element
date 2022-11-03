import { html } from 'lit';
import '../src/app-pokemon.js';

export default {
  title: 'AppPokemon',
  component: 'app-pokemon',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <app-pokemon
      style="--app-pokemon-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </app-pokemon>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
