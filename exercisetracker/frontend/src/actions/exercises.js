import axios from "axios";
import { GET_EXERCISES, DELETE_EXERCISE, ADD_EXERCISE } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

// GET Exercises
export const getExercises = () => (dispatch, getState) => {
  axios
    .get("api/exercises/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EXERCISES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE Exercises
export const deleteExercise = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/exercises/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ exerciseDeleted: "Exercise deleted" }));
      dispatch({
        type: DELETE_EXERCISE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// POST Exercises
export const addExercise = (exercise) => (dispatch, getState) => {
  axios
    .post("api/exercises/", exercise, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ exerciseAdded: "New exercise added" }));
      dispatch({
        type: ADD_EXERCISE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
