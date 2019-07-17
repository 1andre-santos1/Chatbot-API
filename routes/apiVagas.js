//API para a vagas

module.exports = function (app, db) {
    //**************************************************/Métodos CRUD******************************************************************

    /**
     * @api {get} /api/jobs Pedido das Vagas existentes
     * @apiGroup Jobs 
     * 
     * @apiSuccess {Object[]} jobs Lista de Vagas
     * @apiSuccess {Number} id ID da Vaga
     * @apiSuccess {String} name  Nome da Vaga
     * @apiSuccess {String} candidateDescript Descrição do Candidato à Vaga
     * @apiSuccess {Boolean} remote Trabalho remoto
     * @apiSuccess {Boolean} formation Formação Inicial
     * @apiSuccess {Boolean} travelOtCountrys Viajar para outros países
     * @apiSuccess {Boolean} shifts Turnos
     * @apiSuccess {Number} location Localização de uma dada vaga
     * @apiSuccess {Number} area Área de uma dada vaga
     * @apiSuccess {DateTime} createdAt Data da criação da Localização
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Localização
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  [
            {
                id: 1,
                name: "System Operations & Monitoring",
                candidateDescript: "12º Ano em área tecnológica ou frequência académica em Tecnológia; Orientação para o cliente; Conhecimentos em Operação de Sistemas (preferencial);Conhecimentos da língua Inglesa falada e escrita; Conhecimentos da língua Castelhana falada e escrita (preferencial); Disponibilidade para turnos 24*7;",
                remote: true,
                formation: false,
                travelOtCountrys: false,
                shifts: true,
                location: 2,
                area: 1,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 2,
                name: "Programador Junior",
                candidateDescript: "Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.",
                remote: true,
                formation: true,
                travelOtCountrys: false,
                shifts: false,
                location: 1,
                area: 1,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 3,
                name: "Analista Funcional Junior",
                candidateDescript: "Recém-Licenciado em Engenharia Informática ou similares; Boa comunicação e atitude proativa, capacidade de definir e documentar processos; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.",
                remote: false,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 4,
                area: 1,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 4,
                name: "Técnico de Informática/Recém-Licenciado",
                candidateDescript: "Recém-Licenciado em Engenharia Informática ou similares; Interesse em técnologias IBM (iSeries; AS400) ; Bons conhecimentos Inglês; Disponibilidade",
                remote: false,
                formation: false,
                travelOtCountrys: true,
                shifts: true,
                location: 3,
                area: 1,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 5,
                name: "Business Intelligence (M/F)",
                candidateDescript: "Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SQL/ETL (Datawarehouse); Capacidade de aprendizagem e evolução;",
                remote: true,
                formation: true,
                travelOtCountrys: true,
                shifts: false,
                location: 5,
                area: 1,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 6,
                name: "Consultor SAP Junior Logística",
                candidateDescript: "Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SAP Logística; Experiência até 1 ano em SAP Logística; Apetência para o trabalho em equipa;",
                remote: true,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 4,
                area: 1,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 7,
                name: "System Administrator",
                candidateDescript: "Licenciatura em Engenharia Informática ou equivalente; Experiência em Administração de Sistemas Windows Server ou Linux (valorizado 3 ou mais anos de experiência); Conhecimentos em ambientes Windows Server (2003/2008/2012/2016: uma ou mais versões); Conhecimentos em ambientes Linux (Redhat/Debian/Ubuntu/SUSE: um ou mais Flavours); Conhecimentos Inglês; Conhecimento Castelhano (valorizado); Conhecimentos de redes TCP/IP;",
                remote: true,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 1,
                area: 1,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 8,
                name: "Analista de produção Mainframe",
                candidateDescript: "Implementação e manutenção de cadeias e jobs em Control-M e IWS; Implementação e manutenção de calendários em Control-M e IWS; Manutenção das rotinas e utilitários base do Control-M e IWS; Análise e customização de JCL; Análise e resolução de cancelamentos em jobs no batch rotinado; Implementação e manutenção da submissão dos processos batch via CICS; Implementação e manutenção da submissão dos processos via FTSM; Análise à performance do batch para sugestão de melhorias - Performance Tuning. ",
                remote: false,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 2,
                area: 2,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 9,
                name: "Adminsitrador de Sistemas Windows",
                candidateDescript: "Administração de Sistemas Operativos Windows 10, 8 e 7; Distribuição de software, reporting e respectivo troubleshooting através de tools como por exemplo (SCCM 2012, 2016CB, Bigfix ou outras); Patch management de segurança; instalação, testes e distribuição; Consolas de Anti-virus (Mcafee, Symantec, Microsoft, …); Criação pacotes aplicacionais unattended; Implementação de imagens e soluções desktop, (por exemplo com SCCM, MDT, Ghost) e conhecimentos em scripts (ex PowerShell); Produção e documentação de processos e procedimentos técnicos; Domínio de Inglês técnico falado e escrito;",
                remote: true,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 1,
                area: 2,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 10,
                name: "Programador Web",
                candidateDescript: "Licenciatura / Mestrado em Engenharia Informática ou Curso Técnico na área de Sistemas Informáticos; Domínios das tecnologias Web: Java, .Net, SQL , javascript; Capacidade de análise de requisitos /análise funcional e técnica;	Capacidade de Gestão dos vários pedidos.",
                remote: true,
                formation: false,
                travelOtCountrys: false,
                shifts: false,
                location: 3,
                area: 2,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 11,
                name: "Administrador de Sistemas",
                candidateDescript: "Windows Server (2003/2008/2012/2016); Linux (RedHat,Debian,Ubuntu); Conhecimentos de scripting, PowerShell; Conhecimentos comprovados de administração de sistemas Unix's - (Aix; Linux; HPUX, SunSolaris); Conhecimentos das línguas Inglesa e Castelhana falada e escrita; Conhecimentos de Redes TCP/IP;",
                remote: true,
                formation: false,
                travelOtCountrys: false,
                shifts: false,
                location: 4,
                area: 2,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 12,
                name: "Administrador de Sistemas Linux/Unix ",
                candidateDescript: "Conhecimentos sólidos Unix/Linux (Solaris / HP-UX / AIX / VIOS / HMC; Linux RedHat / Oracle; SSH / Sudo/ Suse); Conhecimentos de Redes TCP/IP; Pró-ativo e Dinamico.",
                remote: true,
                formation: false,
                travelOtCountrys: false,
                shifts: false,
                location: 1,
                area: 2,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 13,
                name: "Security Access Management Technician (M/F)",
                candidateDescript: "Criação / remoção e edição de user (logical groups); Reset password, gestão de ticket com SLA; Niveis de Serviço, change management, revalidações de users , gerir regras e grupos; Conhecimentos avançados em AD - active directory.",
                remote: true,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 5,
                area: 2,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 14,
                name: "Operação de Sistemas e Monitorização",
                candidateDescript: "12º Ano em área tecnológica ou frequência académica em Tecnologia; Conhecimentos em Operação de Sistemas (preferencial); Conhecimentos em Operação de Sistemas mainframe (preferencial); Disponibilidade para turnos 24*7; Espírito de Equipa; Orientação para o cliente; Conhecimentos da língua Inglesa e falada e escrita;",
                remote: true,
                formation: false,
                travelOtCountrys: false,
                shifts: true,
                location: 2,
                area: 2,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 15,
                name: "Software Developer-J2EE",
                candidateDescript: " Experiência profissional pelo menos de menos 2/3 anos com J2EE; Experiência no desenvolvimento de aplicações para a web; Conhecimentos de Bases de Dados; Bons conhecimentos de inglês falado e escrito.",
                remote: true,
                formation: false,
                travelOtCountrys: false,
                shifts: false,
                location: 1,
                area: 3,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 16,
                name: "Analista Funcional",
                candidateDescript: "Formação superior em Informática, Informática de Gestão ou Engenharias; Experiência em análise funcional, levantamento de requisitos, etc; Conhecimento na área de utilities; Mais de 5 ano experiência; Apetência para o trabalho em equipa; ",
                remote: false,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 4,
                area: 3,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 17,
                name: "Perfil Javascript",
                candidateDescript: " Formação em engenharia informática, matemática ou similar; Perfil com 2 anos de experiência em desenvolvimento em javascript, NodeJS, Frontend Frameworks CSS, HTML5; Vontade de aprender e conhecer novas tecnologias.",
                remote: true,
                formation: false,
                travelOtCountrys: false,
                shifts: false,
                location: 2,
                area: 3,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 18,
                name: "Programador",
                candidateDescript: "Formação superior em Engenharia Informática ou similares; Gosto por trabalhar com tecnologias como: HTLM, JAVA, .net; PL-SQL ; BD Relacional: oracle ; Big Data: Spark, Python, HQL; Versionamento: GIT ",
                remote: true,
                formation: false,
                travelOtCountrys: false,
                shifts: false,
                location: 2,
                area: 3,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 19,
                name: "Analista Programador/Analista Orgânico",
                candidateDescript: " Formação superior em Engenharia Informática ou similares; Gosto por trabalhar com tecnologias como: Front-end: Angular 6 (HTML, JavaScript, SCSS, nodeJS, TypeScript) , Back-end: Java SpringBoot, BD Relacional: PostreSQL, Big Data: Spark, Python, HQL; Versionamento: GIT; Gosto por trabalhar em projetos multiculturais, com equipas remotas e com recurso a metodologias ágeis.",
                remote: true,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 5,
                area: 3,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 20,
                name: "Consultores Java",
                candidateDescript: "Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento Java/web; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito;",
                remote: false,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 1,
                area: 3,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 21,
                name: "Consultores .NET",
                candidateDescript: "Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento .net c#, asp.net ou vb.net; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito.",
                remote: false,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 4,
                area: 3,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            },
            {
                id: 22,
                name: "Product Owner",
                candidateDescript: "Formação superior em Engenharia Informática ou similares; Análise funcional, levantamento de requisitos; Experiência na metodologia SCRUM;Certificação de testes funcionais de acordo com as especificações; Conhecimentos de banca, com vocação para fazer análise;",
                remote: true,
                formation: false,
                travelOtCountrys: true,
                shifts: false,
                location: 3,
                area: 3,
                createdAt: "2019-06-13T15:24:13.000Z",
                updatedAt: "2019-06-13T15:24:13.000Z"
            }
        ]
     *
     *@apiErrorExample {json} Erro no Servidor
     *  HTTP/1.1 500 Internal Server Error
     *  {
     *    erro: "Erro no Pedido de Vagas"
     *  }
     */

    app.get('/api/jobs', function (req, res) {
        db.Jobs.findAll({

        }).then(function (result) {
            res.json(result);
        }).catch(function(err){
                console.error("Erro get Vagas", err)
				res.status(500).json({ erro: "Erro no Pedido de Vagas" })
            
        });
    });

    /**
     * @api {post} /api/jobs/new Criação de uma nova Vaga
     * @apiGroup Jobs
     * 
     * @apiSuccess {Number} id ID da Vaga
     * @apiSuccess {String} name  Nome da Vaga
     * @apiSuccess {String} candidateDescript Descrição do Candidato à Vaga
     * @apiSuccess {Boolean} remote Trabalho remoto
     * @apiSuccess {Boolean} formation Formação Inicial
     * @apiSuccess {Boolean} travelOtCountrys Viajar para outros países
     * @apiSuccess {Boolean} shifts Turnos
     * @apiSuccess {Number} location Localização de uma dada vaga
     * @apiSuccess {Number} area Área de uma dada vaga
     * @apiSuccess {DateTime} createdAt Data da criação da Localização
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Localização
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  {
     *      "id": 23,
     *      "name": "Developer de mobile",
     *      "candidateDescript": "Saber de tecnologia com a finalidade de desenvolvimento mobile; Conhecimentos em Android Studio",
     *      "location": "1",
     *      "updatedAt": "2019-06-14T13:49:54.906Z",
     *      "createdAt": "2019-06-14T13:49:54.906Z"
     *  }
     * 
     */
    app.post('/api/jobs/new', function (req, res) {
        db.Jobs.create({
            name: req.body.name,
            candidateDescript: req.body.candidateDescript,
            remote: req.body.remote,
            formation: req.body.formation,
            travelOtCountrys: req.body.travelOtCountrys,
            shifts: req.body.shifts,
            location: req.body.location,
            area: req.body.area
        }).then(function (results) {
            res.json(results);
        })
    });

    /**
     * @api {put} /api/jobs/update/:id Atualização de uma Vaga
     * @apiGroup Jobs
     * 
     * @apiSuccess {String} message Mensagem que informa que a Vaga foi atualizada 
     * 
     * @apiSuccessExample {json} Sucesso
     * HTTP/1.1 200 OK
     * {
     *  "message": "Vaga Atualizada com Sucesso!"
     * }
     */
    app.put('/api/jobs/update/:id', function (req, res) {
        db.Jobs.update({
            name: req.body.name,
            candidateDescript: req.body.candidateDescript,
            remote: req.params.remote,
            formation: req.params.formation,
            travelOtCountrys: req.params.travelOtCountrys,
            shifts: req.params.shifts,
            location: req.body.location,
            area: req.body.area
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json({message: "Vaga Atualizada com Sucesso!"});
            })
    });

    /**
     * @api {put} /api/jobs/delete/:id Eliminação de uma Vaga
     * @apiGroup Jobs
     * 
     * @apiSuccess {String} message Mensagem que informa que a Vaga foi eliminada 
     * 
     * @apiSuccessExample {json} Sucesso
     * HTTP/1.1 200 OK
     * {
     *  "message": "Vaga Eliminada!"
     * }
     */
    app.delete('/api/jobs/delete/:id', function (req, res) {
        db.Jobs.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json({message: "Vaga Eliminada!"});
        });
    });

    //**************************************************LISTAR VAGAS*********************************************************************/
    /**
     * @api {get} /api/jobs/:id Pedido das informações de uma Vaga
     * @apiGroup Jobs
     * 
     * @apiSuccess {Objetc[]} job Contém um determinada Vaga
     * @apiSuccess {Number} id ID da Vaga
     * @apiSuccess {String} name  Nome da Área
     * @apiSuccess {String} candidateDescript Descrição do Candidato à Vaga
     * @apiSuccess {Boolean} remote Trabalho remoto
     * @apiSuccess {Boolean} formation Formação Inicial
     * @apiSuccess {Boolean} travelOtCountrys Viajar para outros países
     * @apiSuccess {Boolean} shifts Turnos
     * @apiSuccess {Number} location Localização de uma dada vaga
     * @apiSuccess {Number} area Área de uma dada vaga
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     * HTTP/1.1 200 OK
     * [
            {
                "id": 1,
                "name": "System Operations & Monitoring",
                "candidateDescript": "12º Ano em área tecnológica ou frequência académica em Tecnológia; Orientação para o cliente; Conhecimentos em Operação de Sistemas (preferencial);Conhecimentos da língua Inglesa falada e escrita; Conhecimentos da língua Castelhana falada e escrita (preferencial); Disponibilidade para turnos 24*7;",
                "remote": true,
                "formation": false,
                "travelOtCountrys": false,
                "shifts": true,
                "location": 2,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            }
        ]
     *
     *  @apiErrorExample {json} Erro no Servidor
     *  HTTP/1.1 500 Internal Server Error
     *  {
     *    erro: "Erro no Pedido da Vaga"
     *  }
     *
     * @apiErrorExample {json} Vaga não encontrada
     *  HTTP/1.1 404 Not Found
     *  {
     *    erro: "Não é possível encontrar a Vaga!"
     *  }
     */
    app.get('/api/jobs/:id', function (req, res) {
        db.Jobs.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
           
            //função que permite saber se o objeto recebido está vazio
            function isEmpty(results) {
                // null é "empty"
                if (results == null) return true;
                // se o array tiver algo dentro dele
                if (results.length > 0)    return false;
                console.log(results.length);
                //se o array não tiver lada dentro dele
                if (results.length === 0)  return true            
                return true;
            }
            //se o array dos resultados for vazio
            if(isEmpty(results)==true){
                res.status(404).json({ erro: "Não é possível encontrar a Vaga!" });
            }
            else{
                res.json(results);
            }
        }).catch(function(err){
            console.error("Erro get Vagas", err)
            res.status(500).json({ erro: "Erro no pedido da Vaga" })
        });
    });

    /**
     * @api {get} /api/jobs/location/:location Pedido das Vagas disponíveis para uma determinada Localização
     * @apiGroup Jobs
     * 
     * @apiSuccess {Objetc[]} jobsLocation Lista de Vagas de uma dada Localização
     * @apiSuccess {Number} id ID da Vaga
     * @apiSuccess {String} name  Nome da Área
     * @apiSuccess {String} candidateDescript Descrição do Candidato à Vaga
     * @apiSuccess {Boolean} remote Trabalho remoto
     * @apiSuccess {Boolean} formation Formação Inicial
     * @apiSuccess {Boolean} travelOtCountrys Viajar para outros países
     * @apiSuccess {Boolean} shifts Turnos
     * @apiSuccess {Number} location Localização de uma dada vaga
     * @apiSuccess {Number} area Área de uma dada vaga
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
        [
            {
                "id": 2,
                "name": "Programador Junior",
                "candidateDescript": "Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.",
                "remote": true,
                "formation": true,
                "travelOtCountrys": false,
                "shifts": false,
                "location": 1,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 7,
                "name": "System Administrator",
                "candidateDescript": "Licenciatura em Engenharia Informática ou equivalente; Experiência em Administração de Sistemas Windows Server ou Linux (valorizado 3 ou mais anos de experiência); Conhecimentos em ambientes Windows Server (2003/2008/2012/2016: uma ou mais versões); Conhecimentos em ambientes Linux (Redhat/Debian/Ubuntu/SUSE: um ou mais Flavours); Conhecimentos Inglês; Conhecimento Castelhano (valorizado); Conhecimentos de redes TCP/IP;",
                "remote": true,
                "formation": false,
                "travelOtCountrys": true,
                "shifts": false,
                "location": 1,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 9,
                "name": "Adminsitrador de Sistemas Windows",
                "candidateDescript": "Administração de Sistemas Operativos Windows 10, 8 e 7; Distribuição de software, reporting e respectivo troubleshooting através de tools como por exemplo (SCCM 2012, 2016CB, Bigfix ou outras); Patch management de segurança; instalação, testes e distribuição; Consolas de Anti-virus (Mcafee, Symantec, Microsoft, …); Criação pacotes aplicacionais unattended; Implementação de imagens e soluções desktop, (por exemplo com SCCM, MDT, Ghost) e conhecimentos em scripts (ex PowerShell); Produção e documentação de processos e procedimentos técnicos; Domínio de Inglês técnico falado e escrito;",
                "remote": true,
                "formation": false,
                "travelOtCountrys": true,
                "shifts": false,
                "location": 1,
                "area": 2,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 12,
                "name": "Administrador de Sistemas Linux/Unix ",
                "candidateDescript": "Conhecimentos sólidos Unix/Linux (Solaris / HP-UX / AIX / VIOS / HMC; Linux RedHat / Oracle; SSH / Sudo/ Suse); Conhecimentos de Redes TCP/IP; Pró-ativo e Dinamico.",
                "remote": true,
                "formation": false,
                "travelOtCountrys": false,
                "shifts": false,
                "location": 1,
                "area": 2,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 15,
                "name": "Software Developer-J2EE",
                "candidateDescript": " Experiência profissional pelo menos de menos 2/3 anos com J2EE; Experiência no desenvolvimento de aplicações para a web; Conhecimentos de Bases de Dados; Bons conhecimentos de inglês falado e escrito.",
                "remote": true,
                "formation": false,
                "travelOtCountrys": false,
                "shifts": false,
                "location": 1,
                "area": 3,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 20,
                "name": "Consultores Java",
                "candidateDescript": "Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento Java/web; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito;",
                "remote": false,
                "formation": false,
                "travelOtCountrys": true,
                "shifts": false,
                "location": 1,
                "area": 3,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 23,
                "name": "Developer de mobile",
                "candidateDescript": "Saber de tecnologia com a finalidade de desenvolvimento mobile; Conhecimentos em Android Studio",
                "remote": null,
                "formation": null,
                "travelOtCountrys": null,
                "shifts": null,
                "location": 1,
                "area": null,
                "createdAt": "2019-06-14T13:49:54.000Z",
                "updatedAt": "2019-06-14T13:51:33.000Z"
            }
        ]
     *
     *  @apiErrorExample {json} Erro no Servidor
     *  HTTP/1.1 500 Internal Server Error
     *  {
     *    erro: "Erro no Pedido das Vagas"
     *  }
     *
     * @apiErrorExample {json} Vagas não encontradas
     *  HTTP/1.1 404 Not Found
     *  {
     *    erro: "A Localização pretendida não existe!"
     *  }
     * 
     */
    app.get('/api/jobs/location/:location', function (req, res) {
        db.Jobs.findAll({
            where: {
                location: req.params.location
            }
        }).then(function (results) {
           
            //função que permite saber se o objeto recebido está vazio
            function isEmpty(results) {
                // null é "empty"
                if (results == null) return true;
                // se o array tiver algo dentro dele
                if (results.length > 0)    return false;
                console.log(results.length);
                //se o array não tiver lada dentro dele
                if (results.length === 0)  return true            
                return true;
            }
            //se o array dos resultados for vazio
            if(isEmpty(results)==true){
                res.status(404).json({ erro: "A Localização pretendida não existe!" });
            }
            else{
                res.json(results);
            }
        }).catch(function(err){
            console.error("Erro get Vagas", err)
            res.status(500).json({ erro: "Erro no pedido das Vagas" })
        });
    });


    /**
     * @api {get} /api/jobs/area/:area Pedido das Vagas disponíveis para uma determinada Área
     * @apiGroup Jobs
     * 
     * @apiSuccess {Objetc[]} job Lista de Vagas para uma determnada área
     * @apiSuccess {Number} id ID da Vaga
     * @apiSuccess {String} name  Nome da Vaga
     * @apiSuccess {String} candidateDescript Descrição do Candidato à Vaga
     * @apiSuccess {Boolean} remote Trabalho remoto
     * @apiSuccess {Boolean} formation Formação Inicial
     * @apiSuccess {Boolean} travelOtCountrys Viajar para outros países
     * @apiSuccess {Boolean} shifts Turnos
     * @apiSuccess {Number} location Localização de uma dada vaga
     * @apiSuccess {Number} area Área de uma dada vaga
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  [
            {
                "id": 1,
                "name": "System Operations & Monitoring",
                "candidateDescript": "12º Ano em área tecnológica ou frequência académica em Tecnológia; Orientação para o cliente; Conhecimentos em Operação de Sistemas (preferencial);Conhecimentos da língua Inglesa falada e escrita; Conhecimentos da língua Castelhana falada e escrita (preferencial); Disponibilidade para turnos 24*7;",
                "remote": true,
                "formation": false,
                "travelOtCountrys": false,
                "shifts": true,
                "location": 2,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 2,
                "name": "Programador Junior",
                "candidateDescript": "Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.",
                "remote": true,
                "formation": true,
                "travelOtCountrys": false,
                "shifts": false,
                "location": 1,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 3,
                "name": "Analista Funcional Junior",
                "candidateDescript": "Recém-Licenciado em Engenharia Informática ou similares; Boa comunicação e atitude proativa, capacidade de definir e documentar processos; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.",
                "remote": false,
                "formation": false,
                "travelOtCountrys": true,
                "shifts": false,
                "location": 4,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 4,
                "name": "Técnico de Informática/Recém-Licenciado",
                "candidateDescript": "Recém-Licenciado em Engenharia Informática ou similares; Interesse em técnologias IBM (iSeries; AS400) ; Bons conhecimentos Inglês; Disponibilidade",
                "remote": false,
                "formation": false,
                "travelOtCountrys": true,
                "shifts": true,
                "location": 3,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 5,
                "name": "Business Intelligence (M/F)",
                "candidateDescript": "Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SQL/ETL (Datawarehouse); Capacidade de aprendizagem e evolução;",
                "remote": true,
                "formation": true,
                "travelOtCountrys": true,
                "shifts": false,
                "location": 5,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 6,
                "name": "Consultor SAP Junior Logística",
                "candidateDescript": "Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SAP Logística; Experiência até 1 ano em SAP Logística; Apetência para o trabalho em equipa;",
                "remote": true,
                "formation": false,
                "travelOtCountrys": true,
                "shifts": false,
                "location": 4,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 7,
                "name": "System Administrator",
                "candidateDescript": "Licenciatura em Engenharia Informática ou equivalente; Experiência em Administração de Sistemas Windows Server ou Linux (valorizado 3 ou mais anos de experiência); Conhecimentos em ambientes Windows Server (2003/2008/2012/2016: uma ou mais versões); Conhecimentos em ambientes Linux (Redhat/Debian/Ubuntu/SUSE: um ou mais Flavours); Conhecimentos Inglês; Conhecimento Castelhano (valorizado); Conhecimentos de redes TCP/IP;",
                "remote": true,
                "formation": false,
                "travelOtCountrys": true,
                "shifts": false,
                "location": 1,
                "area": 1,
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            }
     *  ]
     *
     * @apiErrorExample {json} Erro no Servidor
     *  HTTP/1.1 500 Internal Server Error
     *  {
     *    erro: "Erro no Pedido das Vagas"
     *  }
     *
     * @apiErrorExample {json} Vagas não encontradas
     *  HTTP/1.1 404 Not Found
     *  {
     *    erro: "A Área pretendida não existe!"
     *  }
     * 
     */
    app.get('/api/jobs/area/:area', function (req, res) {
        db.Jobs.findAll({
            where: {
                area: req.params.area
            }
        }).then(function (results) {
            
            //função que permite saber se o objeto recebido está vazio
            function isEmpty(results) {
                // null é "empty"
                if (results == null) return true;
                // se o array tiver algo dentro dele
                if (results.length > 0)    return false;
                console.log(results.length);
                //se o array não tiver lada dentro dele
                if (results.length === 0)  return true            
                return true;
            }
            //se o array dos resultados for vazio
            if(isEmpty(results)==true){
                res.status(404).json({ erro: "A Área  pretendida não existe!" });
            }
            else{
                res.json(results);
            }
        }).catch(function(err){
            console.error("Erro get Vagas", err)
            res.status(500).json({ erro: "Erro no pedido da Vaga" })
        });
    });
    app.get('/api/jobs/:idLocal/:idArea', function (req, res) {
        db.Jobs.findAll({
            where: {
                location: req.params.idLocal,
                area: req.params.idArea
            }
        }).then(function (results) {
            
            //função que permite saber se o objeto recebido está vazio
            function isEmpty(results) {
                // null é "empty"
                if (results == null) return true;
                // se o array tiver algo dentro dele
                if (results.length > 0)    return false;
                console.log(results.length);
                //se o array não tiver lada dentro dele
                if (results.length === 0)  return true            
                return true;
            }
            //se o array dos resultados for vazio
            if(isEmpty(results)==true){
                res.status(404).json({ erro: "A Área  pretendida não existe!" });
            }
            else{
                res.json(results);
            }
        }).catch(function(err){
            console.error("Erro get Vagas", err)
            res.status(500).json({ erro: "Erro no pedido da Vaga" })
        });
    });
    
}

