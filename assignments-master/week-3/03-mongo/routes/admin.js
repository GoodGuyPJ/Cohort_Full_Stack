const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if a user with this username already exists
    await Admin.create({
        // username,
        // password
        // or use this
        username: username,
        password: password
    })
    res.json({
        msg: "Admin created successfully"
    })
    // .then(function(value){
    //     res.json({
    //         msg: "Admin created successfully"
    //     })
    // })
    // .catch(function(err){
    //     res.status(500).json({
    //         msg: "Error creating admin"
    //     })
    // })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // Zod use for input validation
    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    console.log(newCourse);
    res.json({
        msg: "Course created successfully ", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
        res.json({
            courses: response  
        })
    
});

module.exports = router;