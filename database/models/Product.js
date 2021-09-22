module.exports = function(sequelize, dataTypes) {
    let alias = 'Producto';

    let cols = {
        id: {
            type: dataTypes.INTERGER,
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
            type: dataTypes.INTERGER,
        },
        description:{
            type: dataTypes.INTERGER
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'Id_Categories'
        })
        Product.hasMany(models.Shopping, {
            as: 'products',
            foreignKey: 'Id_Products'
        })
    }

}