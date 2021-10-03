const db = require('../../models');
const router = require('express').Router();

router.get('/workouts', async (req, res) => {
    db.Workout.aggregate.addFields(
        {
            totalDuration: { $sum: "$duration"}
        }        
    ).exec(function (error, workouts) {
        if (error) {
            res.status(500).json(error)
        } else {
            res.status(200).json(workouts)
        }
    })

    // db.Workout.find({}, function (error, workouts) {
    //     if (error) {
    //         res.status(500).json(error)
    //     } else {
    //         res.status(200).json(workouts)
    //     }
    // })
})

router.put('/workouts/:id', async (req, res) => {
    db.Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, function (error, workouts) {
        if (error) {
            res.status(500).json(error)
        } else {
            res.status(200).json(workouts)
        }
    })
})

router.post('/workouts', async (req, res) => {
    db.Workout.create(req.body, function (error, workouts) {
        if (error) {
            res.status(500).json(error)
        } else {
            res.status(200).json(workouts)
        }
    })
})

router.get('/workouts/range', async (req, res) => {
    db.Workout.find({}, function (error, workouts) {
        if (error) {
            res.status(500).json(error)
        } else {
            res.status(200).json(workouts)
        }
    })
})

module.exports = router;