module.exports = function(sequelize, dataTypes) {
    let alias = 'Direccion';

    let cols = {
        Id_addresses: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        Street: {
            type: dataTypes.STRING
        },
        Number_ext: {
            type: dataTypes.STRING
        },
        Colony: {
            type: dataTypes.STRING,
        },
        Number_int:{
            type: dataTypes.STRING
        },
        Reference:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'addresses',
        timestamps: false
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