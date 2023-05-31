import html from "html-literal";
import logo from "../assets/logo.jpg";

export default () => html`
  <footer>
    <hr />
    &copy; 2020 <a id="savvy" href="https://savvycoders.com/">Savvy Coders</a>
    <img id="logo" src="${logo}" />
  </footer>
`;
