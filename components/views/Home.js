import html from "html-literal";

export default state =>
  html`
  <br>
    <section id="jumbotron">
      <h2>WELCOME TO MY BJJ BOOK<h2>
      <h4>Track your brazilian jiu jitsu classes, build your own library<h5>
    </section>

    <br><br><br><br><br><br>

<div id="calendar"></div>

<br><br><br>

    <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
  <br><br><br>

    <hr />
  `;
