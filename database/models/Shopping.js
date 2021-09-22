module.exports = function(sequelize, dataTypes) {
    let alias = 'Producto';

    let cols = {
        Id_categories: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        number_of_items: {
            type: dataTypes.INTEGER
        },
        id_product: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: 'shopping cart',
        timestamps: false
    }
    
    let Shopping = sequelize.define(alias, cols, config);

    Shopping.associate = function(models){
        Shopping.belongsTo(models.Usuario, {
            as: 'user',
            foreignKey: 'Id_users'
        })

        Shopping.belongsTo(models.Producto, {
            as: 'products',
            foreignKey: 'Id_Products'
        })
    }
    return Shopping
}