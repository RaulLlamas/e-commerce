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
            type: dataTypes.STRING,
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
            type: dataTypes.STRING,
        },
        Admin:{
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    let User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasOne(models.Direccion, {
            as: 'address',
            foreignKey: 'Id_Addresses'
        })

        User.hasMany(models.Carrito, {
            as: 'user',
            foreignKey: 'Id_users'
        })
    }

    return User

}