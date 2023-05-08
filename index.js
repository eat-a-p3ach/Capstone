import { Header, Nav, Main, Footer } from "./components";
import * as store from "./Store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

// Make sure that dotenv.config(); is placed after all of you import statements

const router = new Navigo("/");
function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}`;

  // afterRender(state);

  router.updatePageLinks();
}
// add menu toggle to bars icon in nav bar
// function afterRender(state) {
//   document.querySelector(".fa-bars").addEventListener("click", () => {
//     document.querySelector("nav > ul").classList.toggle("hidden--mobile");
//   });
// }
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
      case "Home":
        axios
          .get(
            `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${process.env.KEY}`
          )
          .then(response => {
            console.log(response.data);
            done(); // Added done() here
          });
        break;
      default:
        done();
    }
  },

  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
