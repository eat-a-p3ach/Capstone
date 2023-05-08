import html from "html-literal";

// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing
export default links => html`
  <nav>
    <li><a href="/home">Home</a></li>
    <li><a href="/mytraining">My Training</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/about">About</a></li>
    <!-- <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
      .map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )
      .join("")}
    </ul> -->
  </nav>

  <!-- <div class="start">
  <nav>
<h2 class="logo">My BJJ Book</h2>
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">My Training</a></li>
  <li><a href="#">Contact</a></li>
  <li><a href="#">About</a></li>
  <ul class="hidden--mobile nav-links"> -->
`;
