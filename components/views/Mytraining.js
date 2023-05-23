import html from "html-literal";

export default () =>
  html`
    <section id="jumbotrontwo">
      TRAINING PAGE - CREATE FLOW CHART
    </section>
    <br />
    <div id="calendar"></div>

    <div class="form">
      <form action="" method="POST" class="library">
        <label for="name">Enter Your Name:</label>
        <input type="text" name="name" id="name" placeholder="Your Name" />

        <label for="date">DATE</label>
        <input type="text" name="date" id="date" placeholder="Today's date" />

        <label for="tag">tag:</label>
        <select name="tag" id="tag">
          <option value="tag">#</option>
          <option value="tag"></option>
        </select>

        <label for="move">Tag this new move</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="for example: armbar"
        />

        <div>
          <label for="msg">Enter your message:</label>
          <textarea name="msg" id="msg" cols="50" rows="20"></textarea>
        </div>

        <div>
          <label for="enter">Save to my library</label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  `;
