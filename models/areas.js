module.exports = function(sequelize, Datatypes){
    const Areas = sequelize.define( 'Areas', {
        name: Datatypes.STRING
    });

    Areas.associate = function(models){
        Areas.hasMany(models.Jobs, {
            foreignKey: 'area',
            onDelete: 'Cascade',
            constraints: false
        });
    }

    return Areas;

};