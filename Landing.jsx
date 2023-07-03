import React from "react";
import { Fragment } from "react";
import FeaturesFourColumns from "./FeaturesFourColumns";
import HeroTyped from "./HeroTyped";
import MainPageSubscription from "../stripe/MainPageSubscription";
import PropTypes from "prop-types";
import "./landings.css";

const Landing = (props) => {
  const currentUser = props.currentUser;
  return (
    <Fragment>
      <div className="landing_wrapper">
        <HeroTyped />
        <FeaturesFourColumns />
        <MainPageSubscription currentUser={currentUser} />
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Landing;
