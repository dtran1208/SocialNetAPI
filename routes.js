const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('./controllers/userController');

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('./controllers/thoughtController');

const undefinedRouteHandler = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};

router.route('/users')
  .get(getAllUsers)
  .post(createUser);

router.route('/users/:userId/')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router.route('/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

router.route('/thoughts')
  .get(getAllThoughts)
  .post(createThought);

router.route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/thoughts/:thoughtId/reactions')
  .post(createReaction);

router.route('/thoughts/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

router.route('*').all(undefinedRouteHandler);

module.exports = router;
