import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");
const calendar;

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();

  addEventListeners(state);
}

function handleEventDragResize(info) {
  const event = info.event;

// add menu toggle to bars icon in nav bar
function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });


  if (confirm("Are you sure about this change?")) {
    const requestData = {
      customer: event.title,
      start: event.start.toJSON(),
      end: event.end.toJSON(),
      url: event.url
    };


    axios
      .put(`${process.env.API_URL}/appointments/${event.id}`, requestData)
      .then(response => {
        console.log(`Event '${response.data.customer}' (${response.data._id}) has been updated.`);
      })
      .catch(error => {
        info.revert();
        console.log("It puked", error);
      });
  } else {
    info.revert();
  }
}


function addEventListeners(state) {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );


  if (state.view === "Schedule") {
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();

        const inputList = event.target.elements;

        //this part
        const requestData = {
          customer: inputList.customer.value,
          start: new Date(inputList.start.value).toJSON(),
          end: new Date(inputList.end.value).toJSON(),
        };

        //what url do I use here?
        axios
          .post(`${process.env.API_URL}/appointments`, requestData)
          .then(response => {
            // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
            store.Appointments.appointments.push(response.data);
            router.navigate("/appointments");
          })
          .catch(error => {
            console.log("It puked", error);
          });
      });
    }

//lines 83-171 in https://github.com/savvy-coders/full-calendar-spa-example/blob/master/index.js

if (state.view === "Appointments" && state.appointments) {
  const calendarEl = document.getElementById('calendar');
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    buttonText: {
      today:    'Today',
      month:    'Month',
      week:     'Week',
      day:      'Day',
      list:     'List'
    },
    height: '100%',
    dayMaxEventRows: true,
    navLinks: true,
    editable: true,
    selectable: true,
    eventClick: function(info) {
      // change the border color just for fun
      info.el.style.borderColor = 'red';
    },
    eventDrop: function(info) {
      handleEventDragResize(info);
    },
    eventResize: function(info) {
      handleEventDragResize(info);
    },
    select: (info) => {
      const customer = prompt("Please enter a title");

      if (customer) {
        const requestData = {
          customer: customer,
          start: info.start.toJSON(),
          end: info.end.toJSON(),
          allDay: info.view.type === 'dayGridMonth'
        };

        axios
        .post(`${process.env.API_URL}/appointments`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          response.data.title = response.data.customer;
          response.data.url = `/appointments/${response.data._id}`;
          console.log('lyncy-response.data:', response.data);
          store.Appointments.appointments.push(response.data);
          console.log(`Event '${response.data.customer}' (${response.data._id}) has been created.`);
          calendar.addEvent(response.data);
          calendar.unselect();
        })
        .catch(error => {
          console.log("It puked", error);
        });
      } else {
        calendar.unselect();
      }
    },
    events: state.appointments || []
  });
  calendar.render();
}

if (state.view === "Appointments" && state.event) {
  const deleteButton = document.getElementById("delete-appointment");
  deleteButton.addEventListener("click", (event) => {
    deleteButton.disabled = true;
    console.log('lyncy-event.target.dataset.id:', event.target.dataset.id);

    if (confirm("Are you sure you want to delete this appointment")) {
      axios
      .delete(`${process.env.API_URL}/appointments/${event.target.dataset.id}`)
      .then(response => {
        // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
        console.log(`Event '${response.data.customer}' (${response.data._id}) has been deleted.`);
        router.navigate('/appointments');
      })
      .catch(error => {
        console.log("It puked", error);
      });
    } else {
      deleteButton.disabled = false;
    }
  });
}
}

// end lines 83-171


  if (state.view === "Mytraining") {
    document.querySelector("form").addEventListener("submit", event => {
      //prevent default action aka redirect to the same url using POST method
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const Mymoves = [];
      // Iterate over the toppings input group elements
      // for (let input of inputList.moves) {
      //   // If the value of the checked attribute is true then add the value to the toppings array
      //   if (input.checked) {
      //     Mymoves.push(input.value);
      //   }
      // }

      const requestData = {
        user: inputList.user.value,
        date: inputList.Test_DatetimeLocal.value,
        tag: inputList.tag.value,
        move: inputList.move.value,
        message: inputList.msg.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.API_URL}/library/moves`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Mymoves.moves.push(response.data);
          router.navigate("/Mymoves");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

//per https://github.com/savvy-coders/full-calendar-spa-example/blob/master/index.js
//but I'm not exactly sure if this is the right spot
function handleEventDragResize(info) {
  const event = info.event;

  if (confirm("Are you sure about this change?")) {
    const requestData = {
      user: event.title,
      start: event.start.toJSON(),
      end: event.end.toJSON(),
      starttime: event.starttime.toJSON(),
      endtime: event.endtime.toJSON(),
      text: event.text
    };



router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      case "Mymoves":
        console.log(process.env.API_URL);
        axios
          .get(`${process.env.API_URL}/library/moves`)
          .then(response => {
            console.log("response", response);
            store.Mymoves.moves = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },

  // line 173 https://github.com/savvy-coders/full-calendar-spa-example/blob/master/index.js
  // convert these if statements to switch cases
  case "Home"



  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // render(store[view]);
  }
});







router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
        render(store.Viewnotfound);
      }
    }
  })
  .resolve();
