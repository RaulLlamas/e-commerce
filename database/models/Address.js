module.exports = function(sequelize, dataTypes) {
    let alias = 'Direccion';

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement:true
        },
        street: {
            type: dataTypes.STRING
        },
        numberExt: {
            type: dataTypes.STRING
        },
        colony: {
            type: dataTypes.INTERGER,
        },
        numberInt:{
            type: dataTypes.STRING
        },
        reference:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'addresses',
        timestamps: true
    }
    
    let Address = sequelize.define(alias, cols, config);
    
    Address.associate = function(models){
        Address.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'Id_Addresses'
        })
    }
}