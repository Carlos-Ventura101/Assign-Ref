import React from "react";
import PropTypes from "prop-types";

const FeatureTopIcon = ({ item }) => {
  return (
    <div className="mb-4">
      <div className="display-4 text-primary">
        <i className={`text-highlight fa solid fa-${item.icon}`}></i>
      </div>
      <div className="mt-4">
        <h3 className="column-title">{item.title}</h3>
        <p className="fs-4">{item.description}</p>
      </div>
    </div>
  );
};

FeatureTopIcon.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureTopIcon;
