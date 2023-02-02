const BlogPost = require("./BlogPost");
const Category = require("./Category");

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            references: { model: BlogPost, key: 'id' }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: { model: Category, key: 'id' }
        },
    },
        {
            tableName: 'post_categories',
            underscored: true,
        });

    return PostCategory;
};