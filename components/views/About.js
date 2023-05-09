import html from "html-literal";
import freefall from "../../assets/freefall.mp4";

export default state => html`
  <h1>About Lyncy</h1>
  <section id="aboutp">
    <p>
      My name is Lyncy. I love life and crave adventure and new experiences. I created this SPA because jiu
      jitsu is something that is important to my family. My
      intention was to organize what I learn in different classes each week and
      be able to expand on what I learn. This SPA acts as a journal where the
      user can create entries for lessons taken, and create a game plan for
      competition.
    </p>
    <p> <h3>
      Visit
      <a href="https://www.linkedin.com/in/lyncy-hodge/" target="_blank"
        >LinkedIn</a> to learn more! </h3>
    </p>
     </section>

  <div id="falldiv">
    <!-- <video id="fall" src="${freefall}" /> -->
    <video id="fall" width="600" controls>
      <source src="${freefall}" type="video/mp4" />
      <source src="${freefall}" type="video/ogg" />
      Your browser does not support HTML video.
    </video>

    <p>
      Video courtesy of
      <a href="https://gatewayskydivingcenter.com/" target="_blank"
        >Gateway Skydiving Center</a
      >
    </p>
  </div>
`;
