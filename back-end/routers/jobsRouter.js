const express = require('express')
const jobsController = require('./../controllers/jobsController')
const router = express.Router()

router.route('/jobs').get(jobsController.getAllJobs)
router.route('/fulltimejobs').get(jobsController.getFullTimeJobs)
router.route('/').get(jobsController.filterJobs)

router.route('/:id').get(jobsController.getJobById)

module.exports = router
