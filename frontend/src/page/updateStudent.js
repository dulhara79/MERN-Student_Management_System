import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateStudent() {
  const [inputs, setInputs] = useState({ name: "", age: "", gender: "" });
  const { id } = useParams(); // Get ID from URL params
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/student/get/${id}`);
        setInputs(response.data.student);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8070/student/update/${id}`, inputs);
      alert("Student updated successfully!");
      navigate("/all"); // Redirect to the list of all students
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div>
      <center><h1>Update Student</h1></center>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter student name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            placeholder="Enter student age"
            value={inputs.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            placeholder="Enter student gender"
            value={inputs.gender}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
