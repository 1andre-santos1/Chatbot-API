module.exports = function(sequelize, Datatypes){
    const Jobs = sequelize.define( 'Jobs', {
        name: Datatypes.STRING,
        candidateDescript: Datatypes.STRING,
        remote: Datatypes.BOOLEAN,
        formation: Datatypes.BOOLEAN,
        travelOtCountrys: Datatypes.BOOLEAN,
        shifts: Datatypes.BOOLEAN,
        location:{
            type: Datatypes.INTEGER,
            references: {
                model: 'Locations',
                key: 'id',
                as: 'location'
            }
        }, 
        area: {
            type: Datatypes.INTEGER,
            references: {
                model: 'Areas',
                key: 'id',
                as: 'area'
            }
                    
        }
        
    });
 
    //Associação com os Utilizadores
    Jobs.associate = function (models) {
        Jobs.belongsToMany(models.Users, {
            through: 'UsersJobs',
            foreignKey: 'idJob'
        });
    };

    return Jobs;

};