const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers')

router.post('/courseName', (req, res) => {
	courseController.checkCourseIDexists(req.body)
	.then(resultfromController => res.send(resultfromController))
	.catch(error => {
    	console.error('Error checking course code:', error);
    	res.status(500).send('An error occurred while checking the course code.');
    }); 


});

module.exports = router;