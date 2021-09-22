module.exports = function(sequelize, dataTypes) {
    let alias = 'Producto';

    let cols = {
        Id_products: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.FLOAT
        },
        id_category: {
            type: dataTypes.INTEGER,
        },
        description:{
            type: dataTypes.INTEGER
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
        Product.hasMany(models.Producto, {
            as: 'products',
            foreignKey: 'Id_Products'
        })
    }
    return Product
}