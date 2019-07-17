module.exports = function (sequelize, Datatypes) {
    const UsersJobs = sequelize.define( 'UsersJobs', {
        idUser: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id'
            }
          },
        idJob: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Jobs',
              key: 'id'
            }
          },
    });

    return UsersJobs;

};