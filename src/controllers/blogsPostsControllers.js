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

module.exports = {
    postBlogCreation,
    allBlogsPosts,
};