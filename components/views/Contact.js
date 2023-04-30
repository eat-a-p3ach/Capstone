import html from "html-literal";

export default state => html`
  <h1>Contact Me</h1>
  <p>I'm probably going to add some sort of text here.</p>
  <form action="" method="POST">
    <h2>I'd love to hear from you!</h2>
    <label for="name">Name:</label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Enter Your Full Name"
      required
    />

    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="abc123@somewhere.com"
      required
    />

    <label for="phone">Phone:</label>
    <input type="phone" name="phone" id="phone" placeholder="123-456-7890" />

    <div>
      <label for="msg">Enter your message:</label>
      <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
    </div>

    <input type="submit" value="Submit" />

    <hr />
    <div>
      <nav>
        <i class="fas fa-bars"></i>
        <a href="">Home</a>
        <a href="">Training</a>
        <a href="">Game Plan</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </div>
  </form>
`;
