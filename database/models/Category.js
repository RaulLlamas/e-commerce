module.exports = function(sequelize, dataTypes) {
    let alias = 'Categoria';

    let cols = {
        Id_categories: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
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
            as: 'products',
            foreignKey: 'Id_Categories'
        })
    }
    return Category
}