import React from "react";
import PropTypes from "prop-types";

const Progress = ({ value, max }) => {
  return (
    <progress
      value={value}
      max={max}
      style={{ width: "90%", height: "2.5rem" }}
    />
  );
};

Progress.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
  max: Progress.number,
  width: PropTypes.string,
};
Progress.defaultProps = {
  max: 100,
  width: "500px",
};
export default Progress;
