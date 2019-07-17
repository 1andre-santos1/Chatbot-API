module.exports = function(sequelize, Datatypes){
    const Areas = sequelize.define( 'Areas', {
        name: Datatypes.STRING
    });

    return Areas;

};