import test from "ava";
import { initialState, schools, school } from "../initialState";
import {
  receiveSchools,
  receiveSchool,
  throwError,
  clearError
} from "../../client/actions/index";

test("receiveSchools returns schoolsResults in an array", t => {
  let schoolsObject = receiveSchools(schools);
  t.true(schoolsObject.type == "RECEIVE_SCHOOLS");
  t.is(schoolsObject.schoolsResults.length, 2);
});

test("receiveSchool returns a school object", t => {
  let schoolObject = receiveSchool(school);
  t.true(schoolObject.type == "RECEIVE_SCHOOL");
  t.is(schoolObject.school.ID, 1);
});

test("throwError sets the correct error message", t => {
  let errorObject = throwError("Invalid input");
  t.true(errorObject.type == "THROW_ERROR");
  t.is(errorObject.message, "Invalid input");
});

test("clearError returns the correct object", t => {
  let actionObject = clearError();
  t.true(actionObject.type == "CLEAR_ERROR");
});
