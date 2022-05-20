module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.Data,
      updated: DataTypes.Data,
    },
    {
      tableName: 'blogPosts',
      underscored: true,
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.Users,
        { foreignKey: 'userId', as: 'users' });
      BlogPost.hasMany(models.PostsBlogs, 
        { foreignKey: 'postId', as: 'postsBlogs' });
    };
  
    return BlogPost;
  };