module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {
            postId: { type: DataTypes.INTEGER,foreignKey: true },
            categoryId: { type: DataTypes.INTEGER,foreignKey: true },
        },
        {
            timestamps: false,
            underscored: true,
            tableName: 'posts_categories',
        }
    );

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
    };

    return PostCategory;
};
// module.exports = (sequelize, DataTypes) => {
//     const PostCategory = sequelize.define(
//         'PostCategory',
//         {},
//         {
//             timestamps: false,
//             tableName: 'posts_categories',
//         }
//     );

//     PostCategory.associate = (models) => {
//         models.Category.belongsToMany(models.BlogPost, {
//             as: 'blog_posts',
//             through: PostCategory,
//             foreignKey: 'post_id',
//             otherKey: 'category_id',
//         });
//         models.BlogPost.belongsToMany(models.Category, {
//             as: 'categories',
//             through: PostCategory,
//             foreignKey: 'category_id',
//             otherKey: 'post_id',
//         });
//     };

//     return PostCategory;
// };
