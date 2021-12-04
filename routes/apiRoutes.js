const workout = require("../models/workout");
console.log(workout);

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    workout
      .findAll({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //new workout
  app.post("/api/workouts", function (req, res) {
    workout
      .create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/wourkouts/range", function (req, res) {
    workout
      .findAll({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", function (req, res) {
    workout
      .create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  //update workout
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    workout
      .findByIdAndUpdate(
        params.id,
        { $push: { exercise: body } },
        { new: true, runValidators: true }
      )
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
};
