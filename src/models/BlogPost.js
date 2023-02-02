const User = require("./User");

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING(255),
        content: DataTypes.STRING(255),
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
        {
            timestamps: false,
            tableName: 'blog_posts',
            underscored: true,
        });

        BlogPost.associate = (models) => {
            BlogPost.belongsTo(models.User,
              { foreignKey: 'userId', as: 'users' });
          };

    return BlogPost;
};