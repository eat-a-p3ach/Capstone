import html from "html-literal";
import { Calendar } from "fullcalendar/core";
import dayGridPlugin from "fullcalendar/daygrid";

export default state =>
  html`
    <section id="jumbotron">
      <h2>WELCOME TO MY BJJ BOOK<h2>
      <h4>Track your brazilian jiu jitsu classes, build your own library, create
      your competition plan<h5>
    </section>


    <!-- https://fullcalendar.io/docs/daygrid-view -->
<section>

</section>


    <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>

    <hr />
  `;
