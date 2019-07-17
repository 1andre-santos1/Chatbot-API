
const Sequelize = require('sequelize');
const utilizadores = require('./models/utilizadores');

const sequelize = new Sequelize('projetofinal','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

//****************************************CRIAÇÃO DE TABELAS******************************************************************/
//cria tabela de utiilizadores se não existir
var Users = sequelize.define('Users', {
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING
});


//criar tabela de localização
var Locations = sequelize.define('Locations', {
    name: Sequelize.STRING
});


//Criação da tabela de Áreas 
var Areas = sequelize.define('Areas', {
    name: Sequelize.STRING
});


//criar tabela de vagas 
var Jobs = sequelize.define('Jobs',{
        name: Sequelize.STRING,
        candidateDescript: Sequelize.TEXT('long'),
        remote: Sequelize.BOOLEAN,
        formation: Sequelize.BOOLEAN,
        travelOtCountrys: Sequelize.BOOLEAN,
        shifts: Sequelize.BOOLEAN,
        location: Sequelize.INTEGER,
        area: Sequelize.INTEGER    
});


Locations.hasMany(Jobs, {
    foreignKey: 'location',
    onDelete: 'Cascade'
        
});

Areas.hasMany(Jobs, {
    foreignKey: 'area',
    onDelete: 'Cascade'

});

//Criação da Tabela do relacionamento n:m entre as vagas e os utilizadores
var UsersJobs = sequelize.define('UsersJobs', {
    idJob: Sequelize.INTEGER,
    idUser: Sequelize.INTEGER
});


 Users.belongsToMany(Jobs, {
    through: {
      model: UsersJobs,
      unique: false
    },
    foreignKey: 'idJob'
});
  
  Jobs.belongsToMany(Users, {
    through: {
      model: UsersJobs,
      unique: false
    },
    foreignKey: 'idUser'
  });


//************************************************INSERÇÃO DE VALORES NAS TABELAS**********************************************************

//inser valores na tabela utilizadores
sequelize.sync({
    force: true
}).then(function() {
    Users.bulkCreate([
    {
        name:'Andreia Ferreira',
        username: 'admin1',
        password: '$2b$08$Fh6Y6zd4zsHP1igb15PK0.cI2O6y48jYj1zP4m6MbTylOtPKDwqk.',
        email: 'aferreira@hotmail.com'
    },
    {
        name:'André Santos',
        username: 'admin2',
        password: '$2b$08$wklXozkQ266hgRm2y6f7KOcjZPTLdKOVTp35TbRKnbj0hmrzNVrBW',
        email: 'asantos@hotmail.com'

    }
]);
});


sequelize.sync({
    force:true
}).then(function(){
    Locations.bulkCreate([
        {
            name:'Tomar'
        },
        {
            name:'Lisboa'
        },
        {
            name:'Viseu'
        },
        {
            name:'Porto'
        },
        {
            name:'Coimbra'
        }
    ])
});


//inserção de valores na tabela
sequelize.sync({
    force: true
}).then(function() {
    Areas.bulkCreate([
    {
        name: 'Consultoria'
    },
    {
        name:'Infraestruturas'
    },
    {
        name:'Desenvolvimento'
    }
]);
});


//inser valores na tabela vagas
sequelize.sync({
    force: true
}).then(function() {
    Jobs.bulkCreate([
    //********************************Area de Consultoria*********************************/
    {
        name: 'System Operations & Monitoring',
        candidateDescript: '12º Ano em área tecnológica ou frequência académica em Tecnológia; Orientação para o cliente; Conhecimentos em Operação de Sistemas (preferencial);Conhecimentos da língua Inglesa falada e escrita; Conhecimentos da língua Castelhana falada e escrita (preferencial); Disponibilidade para turnos 24*7;',
        remote: true,
        formation: false,
        travelOtCountrys: false,
        shifts: true,
        location: 2, 
        area: 1
    },
    {
        name: 'Programador Junior',
        candidateDescript: 'Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.',
        remote: true,
        formation: true,
        travelOtCountrys: false,
        shifts: false,
        location: 1, 
        area: 1
    },
    {
        name: 'Analista Funcional Junior',
        candidateDescript: 'Recém-Licenciado em Engenharia Informática ou similares; Boa comunicação e atitude proativa, capacidade de definir e documentar processos; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.',
        remote: false,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 4, 
        area: 1
    },
    {
        name: 'Técnico de Informática/Recém-Licenciado',
        candidateDescript: 'Recém-Licenciado em Engenharia Informática ou similares; Interesse em técnologias IBM (iSeries; AS400) ; Bons conhecimentos Inglês; Disponibilidade',
        remote: false,
        formation: false,
        travelOtCountrys: true,
        shifts: true,
        location: 3, 
        area: 1
    },
    {
        name: 'Business Intelligence (M/F)',
        candidateDescript: 'Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SQL/ETL (Datawarehouse); Capacidade de aprendizagem e evolução;',
        remote: true,
        formation: true,
        travelOtCountrys: true,
        shifts: false,
        location: 5, 
        area: 1
    },
    {
        name: 'Consultor SAP Junior Logística',
        candidateDescript: 'Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SAP Logística; Experiência até 1 ano em SAP Logística; Apetência para o trabalho em equipa;',
        remote: true,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 4, 
        area: 1
    },
    {
        name: 'System Administrator',
        candidateDescript: 'Licenciatura em Engenharia Informática ou equivalente; Experiência em Administração de Sistemas Windows Server ou Linux (valorizado 3 ou mais anos de experiência); Conhecimentos em ambientes Windows Server (2003/2008/2012/2016: uma ou mais versões); Conhecimentos em ambientes Linux (Redhat/Debian/Ubuntu/SUSE: um ou mais Flavours); Conhecimentos Inglês; Conhecimento Castelhano (valorizado); Conhecimentos de redes TCP/IP;',
        remote: true,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 1, 
        area: 1
    },
    //********************************Área de Infraestruturas******************************/
    {
        name: 'Analista de produção Mainframe',
        candidateDescript: 'Implementação e manutenção de cadeias e jobs em Control-M e IWS; Implementação e manutenção de calendários em Control-M e IWS; Manutenção das rotinas e utilitários base do Control-M e IWS; Análise e customização de JCL; Análise e resolução de cancelamentos em jobs no batch rotinado; Implementação e manutenção da submissão dos processos batch via CICS; Implementação e manutenção da submissão dos processos via FTSM; Análise à performance do batch para sugestão de melhorias - Performance Tuning. ',
        remote: false,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 2, 
        area: 2
    },
    {
        name: 'Adminsitrador de Sistemas Windows',
        candidateDescript: 'Administração de Sistemas Operativos Windows 10, 8 e 7; Distribuição de software, reporting e respectivo troubleshooting através de tools como por exemplo (SCCM 2012, 2016CB, Bigfix ou outras); Patch management de segurança; instalação, testes e distribuição; Consolas de Anti-virus (Mcafee, Symantec, Microsoft, …); Criação pacotes aplicacionais unattended; Implementação de imagens e soluções desktop, (por exemplo com SCCM, MDT, Ghost) e conhecimentos em scripts (ex PowerShell); Produção e documentação de processos e procedimentos técnicos; Domínio de Inglês técnico falado e escrito;',
        remote: true,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 1, 
        area: 2
    },
    {
        name: 'Programador Web',
        candidateDescript: 'Licenciatura / Mestrado em Engenharia Informática ou Curso Técnico na área de Sistemas Informáticos; Domínios das tecnologias Web: Java, .Net, SQL , javascript; Capacidade de análise de requisitos /análise funcional e técnica;	Capacidade de Gestão dos vários pedidos.',
        remote: true,
        formation: false,
        travelOtCountrys: false,
        shifts: false,
        location: 3, 
        area: 2
    },
    {
        name: 'Administrador de Sistemas',
        candidateDescript: "Windows Server (2003/2008/2012/2016); Linux (RedHat,Debian,Ubuntu); Conhecimentos de scripting, PowerShell; Conhecimentos comprovados de administração de sistemas Unix's - (Aix; Linux; HPUX, SunSolaris); Conhecimentos das línguas Inglesa e Castelhana falada e escrita; Conhecimentos de Redes TCP/IP;",
        remote: true,
        formation: false,
        travelOtCountrys: false,
        shifts: false,
        location: 4, 
        area: 2
    },
    {
        name: 'Administrador de Sistemas Linux/Unix ',
        candidateDescript: 'Conhecimentos sólidos Unix/Linux (Solaris / HP-UX / AIX / VIOS / HMC; Linux RedHat / Oracle; SSH / Sudo/ Suse); Conhecimentos de Redes TCP/IP; Pró-ativo e Dinamico.',
        remote: true,
        formation: false,
        travelOtCountrys: false,
        shifts: false,
        location: 1, 
        area: 2
    },
    {
        name: 'Security Access Management Technician (M/F)',
        candidateDescript: 'Criação / remoção e edição de user (logical groups); Reset password, gestão de ticket com SLA; Niveis de Serviço, change management, revalidações de users , gerir regras e grupos; Conhecimentos avançados em AD - active directory.',
        remote: true,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 5, 
        area: 2
    },
    {
        name: 'Operação de Sistemas e Monitorização',
        candidateDescript: '12º Ano em área tecnológica ou frequência académica em Tecnologia; Conhecimentos em Operação de Sistemas (preferencial); Conhecimentos em Operação de Sistemas mainframe (preferencial); Disponibilidade para turnos 24*7; Espírito de Equipa; Orientação para o cliente; Conhecimentos da língua Inglesa e falada e escrita;',
        remote: true,
        formation: false,
        travelOtCountrys: false,
        shifts: true,
        location: 2, 
        area: 2
    },
    //********************************Área de Desenvolvimento***************************/
    {
        name: 'Software Developer-J2EE',
        candidateDescript: ' Experiência profissional pelo menos de menos 2/3 anos com J2EE; Experiência no desenvolvimento de aplicações para a web; Conhecimentos de Bases de Dados; Bons conhecimentos de inglês falado e escrito.',
        remote: true,
        formation: false,
        travelOtCountrys: false,
        shifts: false,
        location: 1, 
        area: 3
    }, 
    {
        name: 'Analista Funcional',
        candidateDescript: 'Formação superior em Informática, Informática de Gestão ou Engenharias; Experiência em análise funcional, levantamento de requisitos, etc; Conhecimento na área de utilities; Mais de 5 ano experiência; Apetência para o trabalho em equipa; ',
        remote: false,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 4, 
        area: 3
    },
    {
        name: 'Perfil Javascript',
        candidateDescript: ' Formação em engenharia informática, matemática ou similar; Perfil com 2 anos de experiência em desenvolvimento em javascript, NodeJS, Frontend Frameworks CSS, HTML5; Vontade de aprender e conhecer novas tecnologias.',
        remote: true,
        formation: false,
        travelOtCountrys: false,
        shifts: false,
        location: 2, 
        area: 3
    }, 
    {
        name: 'Programador',
        candidateDescript: 'Formação superior em Engenharia Informática ou similares; Gosto por trabalhar com tecnologias como: HTLM, JAVA, .net; PL-SQL ; BD Relacional: oracle ; Big Data: Spark, Python, HQL; Versionamento: GIT ',
        remote: true,
        formation: false,
        travelOtCountrys: false,
        shifts: false,
        location: 2, 
        area: 3
    },
    {
        name: 'Analista Programador/Analista Orgânico',
        candidateDescript: ' Formação superior em Engenharia Informática ou similares; Gosto por trabalhar com tecnologias como: Front-end: Angular 6 (HTML, JavaScript, SCSS, nodeJS, TypeScript) , Back-end: Java SpringBoot, BD Relacional: PostreSQL, Big Data: Spark, Python, HQL; Versionamento: GIT; Gosto por trabalhar em projetos multiculturais, com equipas remotas e  com recurso a metodologias ágeis.',
        remote: true,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 5, 
        area: 3
    }, 
    {
        name: 'Consultores Java',
        candidateDescript: 'Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento Java/web; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito;',
        remote: false,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 1, 
        area: 3
    },
    {
        name: 'Consultores .NET',
        candidateDescript: 'Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento .net c#, asp.net ou vb.net; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito.',
        remote: false,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 4, 
        area: 3
    },
    {
        name: 'Product Owner',
        candidateDescript: 'Formação superior em Engenharia Informática ou similares; Análise funcional, levantamento de requisitos; Experiência na metodologia SCRUM;Certificação de testes funcionais de acordo com as especificações; Conhecimentos de banca, com vocação para fazer análise;',
        remote: true,
        formation: false,
        travelOtCountrys: true,
        shifts: false,
        location: 3, 
        area: 3 
    },
    
    


    
]);

});


//inser valores na tabela utilizadores
sequelize.sync({
    force: true
}).then(function() {
    UsersJobs.bulkCreate([
    {
        idJob: 1,
        idUser: 1
    }
]);
});






