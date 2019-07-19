module.exports = function(sequelize, Datatypes){
    const Locations = sequelize.define( 'Locations', {
        name: Datatypes.STRING
    });

    Locations.associate = function(models){
        Locations.hasMany(models.Jobs, {
            foreignKey: 'location',
            onDelete: 'Cascade',
            constraints: false
        });
    }

    return Locations;

};