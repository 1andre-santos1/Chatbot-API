module.exports = function(sequelize, Datatypes){
    const Users = sequelize.define( 'Users', {
        name: Datatypes.STRING,
        username: Datatypes.STRING,
        password: Datatypes.STRING,
        email: Datatypes.STRING

    });
     
    //Associação com as Vagas
    Users.associate = function (models) {
        Users.belongsToMany(models.Jobs, {
            through: 'UsersJobs',
            as: 'vagas',
            foreignKey: 'idUser'
        });
    };

    return Users;

};