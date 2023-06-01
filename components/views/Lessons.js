import html from "html-literal";

const defaultStartDate = new Date();
const defaultEndDate = new Date();
defaultEndDate.setHours(defaultStartDate.getHours() + 1);

export default () => html`
  <div class="form">
    <form id="schedule-form" method="POST" action="">
      <h2>Add a Lesson</h2>
      <div>
        <input type="text" name="user" id="user" placeholder="Lesson Title" />
      </div>
      <div>
        <input
          id="start"
          name="start"
          type="datetime-local"
          value="${defaultStartDate.toJSON().substring(0, 16)}"
        />
      </div>
      <div>
        <input
          id="end"
          name="end"
          type="datetime-local"
          value="${defaultEndDate.toJSON().substring(0, 16)}"
        />
      </div>

      <input type="submit" name="submit" value="Submit" />
    </form>
  </div>
`;
