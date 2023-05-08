import html from "html-literal";
import logo from "../assets/logo.jpg";

export default () => html`
  <header>
    <img id="logo" src="${logo}" />
    <h1>My BJJ Book</h1>
  </header>
`;
