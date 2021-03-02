
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Order from './screens/Order';
import SignIn from './screens/SignIn';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a class="logo" href="/">OnlineDelivery</a>
        <div class="headerright">
          <a class="headerconfig" href="/#aboutus">ABOUT US</a>
          <a class="headerconfig" href="/order">MENU</a>
          <div class="dropdown">
            <button class="dropbutton">GR</button>
            <div class="dropdown-content">
              <a href="">Greek</a>
              <a href="">English</a>
            </div>
          </div>
          <a class="headerconfig" href="/signin">SIGN IN</a>
        </div>
      </nav>
      <Switch>
        <Route path="/order" component={Order}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/" component={HomeScreen}></Route>
      </Switch>
      <footer>
        <section className="main-footer">
          <ul className="legal-list">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <ul className="socialmedia-list">
            <li><a href="#"><i className="facebook"></i></a>Facebook</li>
            <li><a href="#"><i className="fab fa-instagram"></i></a>Instagram</li>
          </ul>
          <ul className="copyrights">
            <li>&copy; 2021 Copyright.</li>
          </ul>
        </section>
      </footer>
    </BrowserRouter>
  );
}

export default App;
