const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise Type Required"
      },

      name: {
        type: String,
        trim: true,
        required: "Exercise Name Required"
      },

      duration: {
        type: Number,
        required: "Duration Required"
      },

      weight: {
        type: Number,
        required: "Weight Required"
      },

      reps: {
        type: Number,
        required: "Reps Required"
      },

      sets: {
        type: Number,
        required: "Sets Required"
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;