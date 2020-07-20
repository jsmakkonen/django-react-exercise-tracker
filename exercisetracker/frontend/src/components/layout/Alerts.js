import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(previousProps) {
    const { error, alert, message } = this.props;
    if (error !== previousProps.error) {
      if (error.msg.activity)
        alert.error(`Activity: ${error.msg.activity.join()}`);
      if (error.msg.duration)
        alert.error(`Duration: ${error.msg.duration.join()}`);
      if (error.msg.name) alert.error(`User: ${error.msg.name.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
    }
    if (message !== previousProps.message) {
      if (message.exerciseDeleted) alert.success(message.exerciseDeleted);
      if (message.exerciseAdded) alert.success(message.exerciseAdded);
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
    }
  }

  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
