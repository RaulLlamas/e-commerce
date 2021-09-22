module.exports = function(sequelize, dataTypes) {
    let alias = 'Direccion';

    let cols = {
        Id_addresses: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        street: {
            type: dataTypes.STRING
        },
        Number_ext: {
            type: dataTypes.STRING
        },
        colony: {
            type: dataTypes.INTEGER,
        },
        Number_int:{
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
        Address.belongsTo(models.Usuario, {
            as: 'users',
            foreignKey: 'Id_Addresses'
        })
    }
    return Address
}