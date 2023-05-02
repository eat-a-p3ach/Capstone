import html from "html-literal";

export default state => html`
  <h1>Create an Account</h1>
  <form action="" method="POST">
    <label for="firstname">First Name</label>
    <input
      type="text"
      name="firstname"
      id="firstname"
      placeholder="Enter Your First Name"
      required
    />

    <label for="lastname">Last Name</label>
    <input
      type="text"
      name="lastname"
      id="lastname"
      placeholder="Enter Your First Name"
      required
    />

    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="abc123@somewhere.com"
      required
    />

    <label for="phone">Phone Number</label>
    <input type="phone" name="phone" id="phone" placeholder="123-456-7890" />

    <div>
      <label for="register">Ready to Train?</label>
      <input type="submit" value="Sign Up" />
    </div>
  </form>
`;
