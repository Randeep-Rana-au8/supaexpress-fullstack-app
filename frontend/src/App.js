import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/profile" exact component={ProfileScreen} />
          <Route path="/shipping" exact component={ShippingScreen} />
          <Route path="/payment" exact component={PaymentScreen} />
          <Route path="/placeorder" exact component={PlaceOrderScreen} />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
