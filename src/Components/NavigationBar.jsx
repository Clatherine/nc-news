import { Link } from "react-router-dom";

const NavigationBar =()=>{
return (
    <section id="navigation">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li>Submit an Article</li>
    <li>My Profile</li>
    <li>Login Page</li>
  </ul>
    </section>
)
}

export default NavigationBar;