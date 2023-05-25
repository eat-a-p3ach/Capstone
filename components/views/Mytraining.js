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
        <label for="user">Enter Your Name:</label>
        <input type="text" name="user" id="user" placeholder="Your Name" />

        <label for="date">DATE</label>
        <input type="datetime-local" id="Test_DatetimeLocal" />
        <!-- <input type="text" name="date" id="date" placeholder="Today's date" /> -->
        <br />
        <label for="tag">Belt color:</label>
        <select name="tag" id="tag">
          <option value="tag"></option>
          <option value="tag">white belt</option>
          <option value="tag">blue belt</option>
          <option value="tag">purple belt</option>
          <option value="tag">brown belt</option>
          <option value="tag">black belt</option>
        </select>

        <label for="move">Tag this new move</label>
        <input
          type="text"
          name="move"
          id="move"
          placeholder="for example: armbar"
        />

        <div>
          <label for="msg">Enter your message:</label>
          <textarea name="msg" id="msg" cols="40" rows="10"></textarea>
        </div>

        <div>
          <label for="enter">Save to my library</label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  `;
