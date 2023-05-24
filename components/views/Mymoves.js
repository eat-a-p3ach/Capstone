import html from "html-literal";

export default state => html`
  <h3>
    My Moves
  </h3>
  <table id="moves">
    <tr>
      <th>Date</th>
      <th>Tag</th>
      <th>Move</th>
      <th>Message</th>
      <th>User</th>
    </tr>
    ${state.moves
      .map(moves => {
        return `<tr><td>${moves.date}</td><td>${moves.tag}</td><td>${moves.move}</td><td>${moves.message}</td><td>${moves.user}</td></tr>`;
      })
      .join("")}
  </table>
`;
