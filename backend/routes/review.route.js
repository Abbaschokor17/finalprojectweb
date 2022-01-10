
const router = require('express').Router();
let Review = require('../models/review');

router.route('/').get((req, res) => {
    User.find()
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const author = req.body.author;
    const description= req.body.description;
    const newReview = new Review({ author, description});

    newUser.save()
        .then(() => res.json('Review added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Review deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
    Review.findById(req.params.id)
        .then(review => {
            review.author = req.body.author;
             review.description= req.body.description;
            user.save()
                .then(() => res.json('Review updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;