module.exports = function(sequelize, dataTypes) {
    let alias = 'Usuarios';

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.INTERGER,
        },
        password:{
            type: dataTypes.STRING
        },
        birthday:{
            type: dataTypes.DATE
        },
        id_address:{
            type: dataTypes.INTERGER,
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    let User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasOne(models.Address, {
            as: 'address',
            foreignKey: 'Id_Addresses'
        })

        User.hasMany(models.Shopping, {
            as: 'products',
            foreignKey: 'Id_users'
        })
    }

    

}