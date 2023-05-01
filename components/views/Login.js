import html from "html-literal";

export default state => html`
  <header><h1>MyBJJ Book</h1></header>
  <form action="" method="POST" class="loginform">
    <label for="name">Enter Your Username:</label>
    <input type="text" name="name" id="name" placeholder="Username" required />

    <label for="password">Enter Your Password:</label>
    <input type="password" name="password" id="password" />

    <input type="submit" value="Log In" />
    <div>
      <label for="register">Don't have an account?</label>
      <input type="submit" value="Sign Up" />
    </div>
  </form>
`;
