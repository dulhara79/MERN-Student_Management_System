import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeleteStudent() {
  const { id } = useParams(); // Get the student ID from the URL
  const navigate = useNavigate();
  const [student, setStudent] = useState({});

  useEffect(() => {
    // Fetch the student data using the ID
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/student/get/${id}`);
        setStudent(response.data.student);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete student ${student.name}?`)) {
      try {
        await axios.delete(`http://localhost:8070/student/delete/${id}`);
        alert("Student deleted successfully!");
        navigate("/all"); // Redirect to the list of all students
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("An error occurred while deleting the student.");
      }
    }
  };

  return (
    <div className="container">
      <center><h1>Delete Student</h1></center>
      {student ? (
        <div>
          <p>Are you sure you want to delete the following student?</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          <button className="btn btn-secondary" onClick={() => navigate("/all")}>Cancel</button>
        </div>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
}

export default DeleteStudent;
