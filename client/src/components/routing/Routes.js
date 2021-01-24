import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Switch></Switch>
    </section>
  );
};

Routes.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Routes);
