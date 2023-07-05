const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('./controllers/userController.js');

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('./controllers/throughtController.js');


// /api/users
router
  .route('/users')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:userId
router
  .route('/users/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route('/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

// /api/thoughts
router
  .route('/thoughts')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/thoughts/:thoughtId/reactions')
  .post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/thoughts/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
