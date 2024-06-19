import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    console.log(newStudent);

    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then((res) => {
        alert("Student added");
        // setName("");
        // setAge("");
        // setGender("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <form className="container" onSubmit={sendData}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Studnt name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter student name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label for="age" className="form-label">
            Studnt age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter student age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label for="gender" className="form-label">
            Studnt gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter student gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
