module.exports = function(sequelize, dataTypes) {
    let alias = 'Categoria';

    let cols = {
        Id_categories: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'categories',
        timestamps: false
    }
    
    let Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'Id_Categories'
        })
    }
    return Category
}