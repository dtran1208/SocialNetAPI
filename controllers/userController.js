const { User, Thought } = require('../models/models');

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },

  getUserById(req, res) {
    const userId = req.params.userId;
    User.findById(userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createUser(req, res) {
    User.create(req.body)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createUserThought(req, res) {
    Thought.create(req.body)
      .then(thoughtData => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thoughtData._id } },
          { new: true }
        );
      })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, { new: true })
      .then(thoughtData => {
        if (!thoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(thoughtData => {
        if (!thoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        return User.findOneAndUpdate(
          { _id: thoughtData.userId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        );
      })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'Thought deleted successfully' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true }
    )
      .then(thoughtData => {
        if (!thoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then(thoughtData => {
        if (!thoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};

module.exports = userController;
