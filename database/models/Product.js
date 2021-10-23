module.exports = function(sequelize, dataTypes) {
    let alias = 'Producto';

    let cols = {
        Id_products: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.STRING
        },
        Id_Categories: {
            type: dataTypes.BIGINT(10).UNSIGNED,
        },
        description:{
            type: dataTypes.STRING
        },Image:{
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Categoria,{
            as: 'categories',
            foreignKey: 'Id_Categories'
        })
        Product.hasMany(models.Carrito, {
            as: 'products',
            foreignKey: 'Id_Products'
        })
    }
    return Product
}