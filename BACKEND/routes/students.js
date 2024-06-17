const router = require("express").Router();
let Student = require("../models/Student");
// import logger from "../log";
const logger = require("../log");

// http://localhost:8070/student/add
//create
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      // res.json("Student added");
      res.status(200).send({ status: "Student added", newStudent });
      logger.info("Student added");
    })
    .catch((err) => {
      // console.log(err);
      logger.error(err);
    });
});

// http://localhost:8070/student/
// read
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.status(200).json(students);
      logger.info("Students fetched");
    })
    .catch((err) => {
      // console.log(err);
      logger.error(err);
    });
});

// http://localhost:8070/student/update/611f7b3b7b3b3b3b3b3b3b3b
// update
router.route("/update/:id").put(async (req, res) => {
  let id = req.params.id;
  const { name, age, gender } = req.body;

  const updateStudent = {
    name,
    age,
    gender
  };

  /* const update =  */ await Student.findByIdAndUpdate(id, updateStudent)
    .then(() => {
      res.status(200).send({ status: "Student updated", "student": updateStudent });
      logger.info("Student updated");
    })
    .catch((err) => {
      // console.log(err);
      logger.error(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

// http://localhost:8070/student/delete/611f7b3b7b3b3b3b3b3b3b
// delete
router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id;

  await Student.findByIdAndDelete(id)
    .then((student) => {
      res.status(200).send({ status: "Student deleted", student});
      logger.info("Student deleted");
    })
    .catch((err) => {
      // console.log(err);
      logger.error(err);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

// http://localhost:8070/student/get/611f7b3b7b3b3b3b3b3b3b
// get paticular user
router.route("/get/:id").get(async (req, res) => {
  let id = req.params.id;
  await Student.findById(id)
    .then((student) => {
      res.status(200).send({ status: "User fetched", student, id});
      logger.info("User fetched");
    })
    .catch((err) => {
      // console.log(err);
      logger.error(err);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
