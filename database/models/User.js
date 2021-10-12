module.exports = function(sequelize, dataTypes) {
    let alias = 'Usuario';

    let cols = {
        Id_users: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement:true
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        Telephone: {
            type: dataTypes.INTEGER,
        },
        password:{
            type: dataTypes.STRING
        },
        Birthday_date:{
            type: dataTypes.DATE
        },
        Id_Addresses:{
            type: dataTypes.BIGINT(10).UNSIGNED,
        },
        Image:{
            type: dataTypes.BLOB("long"),
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    let User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo(models.Direccion, {
            as: 'address',
            foreignKey: 'Id_Addresses'
        })

        User.hasMany(models.Producto, {
            as: 'products',
            foreignKey: 'Id_products'
        })
    }

    return User

}