const { BlogPost } = require('../database/models');
const { Category } = require('../database/models');
const { User } = require('../database/models');
const httpCode = require('../helpers/httpCode');
const message = require('../helpers/message');
const postsCategoriesServices = require('./postsCategoriesServices');
const validMessageCode = require('./validMessageCode');

const validCategoryIds = async (categoryId) => {
    const category = await Category.findOne({ where: { id: categoryId } });
    if (!category) throw validMessageCode(httpCode.BAD_REQUEST, message.CATEGORYID_NOT_FOUND);
};

const validEmpty = (title, content, categoryIds) => {
    if (!title || !content || !categoryIds) {
        throw validMessageCode(httpCode.BAD_REQUEST, message.FIELDS_EMPTY);
    }
};

const postBlogCreation = async (title, content, userId, categoryIds) => {
    validEmpty(title, content, categoryIds);
    await Promise.all(categoryIds.map((categoryId) => validCategoryIds(categoryId)));
    const newBlogPost = await BlogPost.create({ title, content, userId });
    const postId = newBlogPost.id;
    await postsCategoriesServices.postCategoryCreation(postId, categoryIds);
    return newBlogPost;
};

const allBlogsPosts = async () => {
    const getBlogsPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    return getBlogsPosts;
};

const validBlogPostExist = (blogPost) => {
    if (!blogPost) throw validMessageCode(httpCode.NOT_FOUND, message.POST_NOT_EXIST);
};

const getIdBlogsPosts = async (id) => {
    const getPostBlog = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    validBlogPostExist(getPostBlog);
    return getPostBlog;
};

const validUserAuthorized = (userId, id) => {
  if (userId !== id) throw validMessageCode(httpCode.UNAUTHORIZED, message.UNAUTHORIZED_UER);
};

const validEmptyForPut = (title, content) => {
    if (!title || !content) throw validMessageCode(httpCode.BAD_REQUEST, message.FIELDS_EMPTY);
};

const putIdBlogPost = async (id, title, content, userId) => {
    validEmptyForPut(title, content);
    const alterBlogPost = await getIdBlogsPosts(id);
    validUserAuthorized(userId, alterBlogPost.user.id);
    alterBlogPost.set({ title, content });
    await alterBlogPost.save();
    const newBlogPost = await getIdBlogsPosts(id);
    return newBlogPost;
};

module.exports = {
    postBlogCreation,
    allBlogsPosts,
    getIdBlogsPosts,
    putIdBlogPost,
};