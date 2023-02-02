module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {},
        {
            timestamps: false,
            tableName: 'posts_categories',
        }
    );

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
        });
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id',
        });
    };

    return PostCategory;
};
