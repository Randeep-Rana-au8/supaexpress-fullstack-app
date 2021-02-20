import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const Rating = ({ value, text, color }) => {
  return (
    <>
      <span>
        {value >= 1 ? (
          <i style={{ color }} className="fas fa-star"></i>
        ) : value >= 0.5 ? (
          <i style={{ color }} className="fas fa-star-half-alt"></i>
        ) : (
          <i style={{ color }} className="far fa-star"></i>
        )}
      </span>
      <span>
        {value >= 2 ? (
          <i style={{ color }} className="fas fa-star"></i>
        ) : value >= 1.5 ? (
          <i style={{ color }} className="fas fa-star-half-alt"></i>
        ) : (
          <i style={{ color }} className="far fa-star"></i>
        )}
      </span>
      <span>
        {value >= 3 ? (
          <i style={{ color }} className="fas fa-star"></i>
        ) : value >= 2.5 ? (
          <i style={{ color }} className="fas fa-star-half-alt"></i>
        ) : (
          <i style={{ color }} className="far fa-star"></i>
        )}
      </span>
      <span>
        {value >= 4 ? (
          <i style={{ color }} className="fas fa-star"></i>
        ) : value >= 3.5 ? (
          <i style={{ color }} className="fas fa-star-half-alt"></i>
        ) : (
          <i style={{ color }} className="far fa-star"></i>
        )}
      </span>
      <span>
        {value >= 5 ? (
          <i style={{ color }} className="fas fa-star"></i>
        ) : value >= 4.5 ? (
          <i style={{ color }} className="fas fa-star-half-alt"></i>
        ) : (
          <i style={{ color }} className="far fa-star"></i>
        )}
      </span>
      <span>{text}</span>
    </>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

// Rating.propTypes = {
//   color: PropTypes.string,
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default Rating;
