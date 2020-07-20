import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addExercise } from "../../actions/exercises";

class Form extends Component {
  state = {
    activity: "",
    duration: "",
    name: "",
  };

  static propTypes = {
    addExercise: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { activity, duration, name } = this.state;
    const exercise = { activity, duration, name };
    this.props.addExercise(exercise);
    this.setState({
      activity: "",
      duration: "",
      name: "",
    });
  };

  render() {
    const { activity, duration, name } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Add new exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group mt-3">
            <label>Activity</label>
            <input
              className="form-control"
              type="text"
              name="activity"
              onChange={this.onChange}
              value={activity}
            />
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input
              className="form-control"
              type="text"
              name="duration"
              onChange={this.onChange}
              value={duration}
            />
          </div>
          <div className="form-group">
            <label>User</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addExercise })(Form);
