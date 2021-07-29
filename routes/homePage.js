const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/homePage'))
})

router.get('/services/cyberSecurity', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/cyberSecurity'))
})

router.get('/services/webDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/webDevelopment'))
})

router.get('/services/softwareDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/softwareDevelopment'))
})

router.get('/services/appDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/appDevelopment'))
})

router.get('/products/schoolManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/school'))
})

router.get('/career', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/career'))
})

router.get('/products/hospitalManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/hospital'))
})

router.get('/products/tourManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/tour'))
})

router.get('/products/mobileSpy', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/mobilespy'))
})

router.get('/products/realEstateManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/realEstate'))
})

router.get('/enroll', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/enrol'))
})

router.get('/enquiry', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/enquiry'))
})
router.get('/training/winterTraining', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Training/winter'))
})
router.get('/training/summerTraining', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Training/summer'))
})
module.exports = router