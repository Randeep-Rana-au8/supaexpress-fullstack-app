import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Image } from "react-bootstrap";
import "../App.css";
const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);

  const { loading, error, products } = productTopRated;
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger"> {error}</Message>
  ) : (
    <>
      <h2 style={{ textAlign: "center" }}>Sale is live🚀</h2>
      <div className="topRated">
        <div className="featured">
          <Link to={`/search/${products[0]?.brand}`}>
            <Image src={products[0]?.image} alt={products[0]?.name} />
          </Link>

          {/* <Image src="/images/sony_sales.jpg" /> */}
        </div>
        <div className="topProducts">
          {products.map((product) =>
            product?.name === products[0]?.name ? (
              ""
            ) : (
              <div className="topProduct">
                <Link to={`/search/${product?.brand}`}>
                  <Image src={product?.image} alt={product?.name} height="270px" />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
