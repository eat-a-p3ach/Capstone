import html from "html-literal";
import * as views from "./views";
//export a function as the default export of this module, taking a single paramter, state
//this expression accesses a function from views object based on value of state.view and calls that function with the state object as an argument
export default state =>
  html`
    ${views[state.view](state)}
  `;
