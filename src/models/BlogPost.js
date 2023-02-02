const User = require("./User");

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING(255),
        content: DataTypes.STRING(255),
        userId: {
            type: DataTypes.INTEGER,
            references: { model: User, key: 'id' }
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
        {
            timestamps: false,
            tableName: 'blog_posts',
            underscored: true,
        });

    return BlogPost;
};