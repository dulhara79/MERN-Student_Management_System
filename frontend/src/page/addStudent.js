import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './addStudent.css';

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const Navigate = useNavigate();

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
        Navigate("/all");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <center>
        <h1>Add Student</h1>
      </center>
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
            type="number"
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


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function AddStudent() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [alertVisible, setAlertVisible] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");
//   const [alertType, setAlertType] = useState("");

//   const navigate = useNavigate();

//   function sendData(e) {
//     e.preventDefault();

//     const newStudent = {
//       name,
//       age,
//       gender,
//     };

//     console.log(newStudent);

//     axios
//       .post("http://localhost:8070/student/add", newStudent)
//       .then((res) => {
//         setAlertMessage("Student added successfully!");
//         setAlertType("success");
//         setAlertVisible(true);
//         // navigate("/all");
//       })
//       .catch((err) => {
//         setAlertMessage(`Error: ${err.message}`);
//         setAlertType("danger");
//         setAlertVisible(true);
//       });
//   }

//   return (
//     <div>
//       <center>
//         <h1>Add Student</h1>
//       </center>
//       {alertVisible && (
//         <div className={`alert alert-${alertType} mt-3`} role="alert">
//           {alertMessage}
//         </div>
//       )}
//       <form className="container" onSubmit={sendData}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Student name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             placeholder="Enter student name"
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="age" className="form-label">
//             Student age
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="age"
//             placeholder="Enter student age"
//             onChange={(e) => {
//               setAge(e.target.value);
//             }}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="gender" className="form-label">
//             Student gender
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="gender"
//             placeholder="Enter student gender"
//             onChange={(e) => {
//               setGender(e.target.value);
//             }}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
