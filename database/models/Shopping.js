module.exports = function(sequelize, dataTypes) {
    let alias = 'Producto';

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement:true
        },
        id_user: {
            type: dataTypes.INTERGER
        },
        number_of_items: {
            type: dataTypes.INTERGER
        },
        id_product: {
            type: dataTypes.INTERGER,
        }
    }

    let config = {
        tableName: 'shopping cart',
        timestamps: false
    }
    
    let Shopping = sequelize.define(alias, cols, config);

    Shopping.associate = function(models){
        Shopping.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'Id_users'
        })

        Shopping.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'Id_Products'
        })
    }
}