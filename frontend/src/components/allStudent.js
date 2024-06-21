import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function AllStudent() {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudent();
  }, []);

  const id = useParams();

  return (
    <div>
      <center>
        <h1>All Students</h1>
      </center>
      <table className="table container table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{ index + 1 }</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                  <Link to={`/update/${student._id}`} className="btn btn-outline-secondary">Update</Link>
                
              </td>
              <td>
                <Link to={`/delete/${student._id}`} className="btn btn-outline-secondary">Delete</Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudent;
