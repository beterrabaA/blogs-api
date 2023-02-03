const Sequelize = require('sequelize');
const { PostCategory } = require('../models');
const config = require('../config/config');
const { BlogPost } = require('../models');
const schema = require('./validations/validationsInputValues');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const getAll = async () => {
    const postCategories = await PostCategory.findAll();

    return { type: '', message: postCategories };
};

const insert = async (postCategory, cats) => {
    const error = schema.validatePost(postCategory, cats);
    if (error.type) return error;
    try {
        const result = await sequelize.transaction(async (t) => {
          const blogPost = await BlogPost.create(postCategory, { transaction: t });
          const categories = cats.map((e) => ({ categoryId: e, postId: blogPost.id }));
          await PostCategory.bulkCreate(categories, { transaction: t });
          return blogPost;
        });
        return { type: '', message: result };
      } catch (err) {
        return { type: 'INVALID_CATEGORY', message: 'one or more "categoryIds" not found' };
      }
};

module.exports = {
    getAll,
    insert,
};