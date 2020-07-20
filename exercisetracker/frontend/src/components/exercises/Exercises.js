import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExercises, deleteExercise } from "../../actions/exercises";

export class Exercises extends Component {
  static propTypes = {
    exercises: PropTypes.array.isRequired,
    getExercises: PropTypes.func.isRequired,
    deleteExercise: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getExercises();
  }

  render() {
    return (
      <Fragment>
        <h2 className="mt-4">Exercises</h2>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Activity</th>
              <th>Duration</th>
              <th>User</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.exercises.map((exercise) => (
              <tr key={exercise.id}>
                <td>{exercise.id}</td>
                <td>{exercise.activity}</td>
                <td>{exercise.duration} minutes</td>
                <td>{exercise.name}</td>
                <td>
                  <button
                    onClick={this.props.deleteExercise.bind(this, exercise.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  exercises: state.exercises.exercises,
});

export default connect(mapStateToProps, { getExercises, deleteExercise })(
  Exercises
);
