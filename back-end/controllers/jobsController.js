const fs = require('fs')
const jobs = require('../data/jobs.json')

const getAllJobs = (req, res, next) => {
  try {
    res.status(201).json({
      status: 'success',
      jobs: jobs,
    })
  } catch (err) {
    res.status(500).json({
      status: 'failure',
    })
  }
}

const getJobById = (req, res, next) => {
  try {
    const id = req.params.id
    let currJob

    for (i = 0; i < jobs.length; i++) {
      if (jobs[i]._id === id) {
        currJob = jobs[i]
      }
    }

    res.status(201).json({
      job: currJob,
      status: 'success',
    })
  } catch (err) {
    res.status(500).json({
      status: 'failure',
    })
  }
}

const getFullTimeJobs = (req, res, next) => {
  try {
    let fullTimeJobs = []
    jobs.forEach((element) => {
      if (element.fullTime == true) {
        fullTimeJobs.push(element)
      }
    })

    res.status(201).json({
      jobs: fullTimeJobs,
      status: 'success',
    })
  } catch (err) {
    res.status(500).json({
      status: 'failure',
      message: err,
    })
  }
}

const filterJobs = (req, res, next) => {
  try {
    const title = req.query.title.toLowerCase()
    let filteredJobs = []

    jobs.forEach((element) => {
      if (
        element.company.companyName.toLowerCase().includes(title) ||
        element.jobTitle.toLowerCase().includes(title)
      ) {
        filteredJobs.push(element)
      }
    })

    const country = req.query.country.toLowerCase()

    let finalFilteredJobs = []

    filteredJobs.forEach((element) => {
      if (element.country.toLowerCase().includes(country)) {
        finalFilteredJobs.push(element)
      }
    })

    res.status(201).json({
      jobs: finalFilteredJobs,
      status: 'success',
    })
  } catch (err) {
    res.status(500).json({
      status: 'failure',
      message: err,
    })
  }
}

module.exports = {
  getAllJobs,
  getJobById,
  getFullTimeJobs,
  filterJobs,
}
