const Post = require("../../models/post");
const checkAuth = require("../../utils/checkauth");
const { AuthenticationError, UserInputError } = require("apollo-server");

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getpost(_, { postId }) {
      try {
        const post = await Post.findById(postId);

        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createPost(_, { body }, context) {
      const user = checkAuth(context);

      // if (args.body.trim() === "") {
      //   throw new Error("Post body must not be empty");
      // }

      const newpost = new Post({
        body,

        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const post = await newpost.save();

      return post;
    },
    async deletePost(_, { body }, context) {
      const user = checkAuth(context);
      try {
        const post = await Post.findById(postId);
        if (user.username == post.username) {
          await post.delete();
          return "posted deleted successfully";
        } else {
          throw new AuthenticationError("something went wrong");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
