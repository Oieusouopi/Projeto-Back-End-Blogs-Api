const httpCode = require('../helpers/httpCode');
const blogPostServices = require('../service/blogsPostsServices');

const postBlogCreation = async (req, res, next) => {
    try {
        const userId = req.user.dataValues.id;
        const { title, content, categoryIds } = req.body;
        const postBlogPost = await blogPostServices
        .postBlogCreation(title, content, userId, categoryIds);
        res.status(httpCode.CREATED).json(postBlogPost);
    } catch (error) {
      next(error);
    }
};

const allBlogsPosts = async (req, res, next) => {
    try {
        const getAllBlogsPosts = await blogPostServices.allBlogsPosts();
        res.status(httpCode.OK).json(getAllBlogsPosts);
    } catch (error) {
        next(error);
    }
};

const getIdBlogsPosts = async (req, res, next) => {
    try {
      const { id } = req.params;
      const getBlogPost = await blogPostServices.getIdBlogsPosts(id);
      res.status(httpCode.OK).json(getBlogPost);
    } catch (error) {
     next(error);
    }
};

const putIdBlogPost = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const { title, content } = req.body;
        const newBlogPost = await blogPostServices.putIdBlogPost(id, title, content, userId);
        res.status(httpCode.OK).json(newBlogPost);
    } catch (error) {
        next(error);
    }
};

const deleteBlogPost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      await blogPostServices.deleteBlogPost(id, userId);
      return res.status(httpCode.NO_CONTENT).end();
    } catch (error) {
     next(error);   
    }
};

module.exports = {
    postBlogCreation,
    allBlogsPosts,
    getIdBlogsPosts,
    putIdBlogPost,
    deleteBlogPost,
};