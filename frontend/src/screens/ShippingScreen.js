import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();

  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [address, setAddress] = useState(shippingAddress.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postal">
          <Form.Label>Postal Code </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter country "
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter address "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
