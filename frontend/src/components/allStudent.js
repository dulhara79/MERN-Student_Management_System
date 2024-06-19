import React, { useState, useEffect } from "react";
import axios from "axios";

// const URL = "http://localhost:8070/student/";

// const frtchHandler = async () => {
//   return (await axios.get(URL))
//     .then((res) => {
//       // res.data;
//     })
//     .catch((err) => {
//       alert(err.message);
//     });
// };

function AllStudent() {
  const [students, setStudents] = useState([]);
  let count = 1;

  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
          // console.log(res);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudent();
  }, []);

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
            <tr key={index}>
              <td /* key={student.name} */>{/* count++ */ index + 1}</td>
              <td /* key={student.name} */>{student.name}</td>
              <td /* key={student.name} */>{student.age}</td>
              <td /* key={student.name} */>{student.gender}</td>
              <td /* key={student.name} */>
                {
                  <button type="button" className="btn btn-outline-secondary">
                    Edit
                  </button>
                }
              </td>
              <td /* key={student.name} */>
                {
                  <button type="button" className="btn btn-outline-secondary">
                    Delete
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudent;
