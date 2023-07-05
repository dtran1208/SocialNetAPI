const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const thoughtController = require('./controllers/thoughtController');


// Define routes
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.post('/users', userController.createUser);
router.route('/users')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route('/users/:userId')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

router.route('/users/:userId/friends/:friendId')
  .post(userController.addFriend);

router.route('/users/:userId/thoughts')
  .post(userController.createUserThought);

// Thought routes
router.route('/thoughts')
  .get(thoughtController.getAllThoughts);

router.route('/thoughts/:thoughtId')
  .get(thoughtController.getThoughtById)
  .put(thoughtController.updateThought)
  .delete(thoughtController.deleteThought);

router.route('/thoughts/:thoughtId/reactions')
  .post(thoughtController.createReaction);

router.route('/thoughts/:thoughtId/reactions/:reactionId')
  .delete(thoughtController.deleteReaction);

module.exports = router;
