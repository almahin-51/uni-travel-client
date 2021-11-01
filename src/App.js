import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddOffer from './Components/AddOffer/AddOffer';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import MyOrder from './Components/MyOrder/MyOrder';
import MyOrders from './Components/MyOrders/MyOrders';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Private/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';
import UserInfo from './Components/UserInfo/UserInfo';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/manage_User">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addOffer">
              <AddOffer></AddOffer>
            </PrivateRoute>
            <PrivateRoute path="/user-info/:serviceId">
              <UserInfo></UserInfo>
            </PrivateRoute>
            <Route path="/my_orders">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
