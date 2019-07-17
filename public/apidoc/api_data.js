define({ "api": [
  {
    "type": "delete",
    "url": "/api/areas/delete/:id",
    "title": "Eliminação de uma Área",
    "group": "Areas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nome da Área que foi eliminada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Área Eliminada!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiArea.js",
    "groupTitle": "Areas",
    "name": "DeleteApiAreasDeleteId"
  },
  {
    "type": "get",
    "url": "/api/areas",
    "title": "Pedido das Áreas existentes",
    "group": "Areas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "areas",
            "description": "<p>Lista de Áreas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n           {\n               \"id\": 1,\n               \"name\": \"Consultorias\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-14T11:04:02.000Z\"\n           },\n           {\n               \"id\": 2,\n               \"name\": \"Infraestruturas\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 3,\n               \"name\": \"Consultorias\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-14T11:28:30.000Z\"\n           },\n           {\n               \"id\": 4,\n               \"name\": \"Base de Dados\",\n               \"createdAt\": \"2019-06-14T10:54:16.000Z\",\n               \"updatedAt\": \"2019-06-14T10:54:16.000Z\"\n           },\n           {\n               \"id\": 6,\n               \"name\": \"Base de dados\",\n               \"createdAt\": \"2019-06-14T11:29:39.000Z\",\n               \"updatedAt\": \"2019-06-14T11:29:39.000Z\"\n           }\n       ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido das Áreas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiArea.js",
    "groupTitle": "Areas",
    "name": "GetApiAreas"
  },
  {
    "type": "get",
    "url": "/api/areas/:id",
    "title": "Pedido das informações de uma Área",
    "group": "Areas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "area",
            "description": "<p>Mostra a área com um determinado ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 6,\n        \"name\": \"Base de dados\",\n        \"updatedAt\": \"2019-06-14T11:29:39.738Z\",\n        \"createdAt\": \"2019-06-14T11:29:39.738Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido da Área\"\n}",
          "type": "json"
        },
        {
          "title": "Área não encontrada",
          "content": "HTTP/1.1 404 Not Found\n{\n  erro: \"Não é possível encontrar a Área!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiArea.js",
    "groupTitle": "Areas",
    "name": "GetApiAreasId"
  },
  {
    "type": "post",
    "url": "/api/areas/new",
    "title": "Criação de uma nova Área",
    "group": "Areas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de Sucesso",
          "content": "    HTTP/1.1 200 OK\n\n{\n  \"id\": 6,\n  \"name\": \"Base de dados\",\n  \"updatedAt\": \"2019-06-14T11:29:39.738Z\",\n  \"createdAt\": \"2019-06-14T11:29:39.738Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiArea.js",
    "groupTitle": "Areas",
    "name": "PostApiAreasNew"
  },
  {
    "type": "put",
    "url": "/api/areas/update/:id",
    "title": "Atualização de uma Área",
    "group": "Areas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem que informa que a Área foi atualizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Área Atualizada!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiArea.js",
    "groupTitle": "Areas",
    "name": "PutApiAreasUpdateId"
  },
  {
    "type": "get",
    "url": "/api/jobs",
    "title": "Pedido das Vagas existentes",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "jobs",
            "description": "<p>Lista de Vagas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidateDescript",
            "description": "<p>Descrição do Candidato à Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "remote",
            "description": "<p>Trabalho remoto</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "formation",
            "description": "<p>Formação Inicial</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "travelOtCountrys",
            "description": "<p>Viajar para outros países</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "shifts",
            "description": "<p>Turnos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Localização de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "area",
            "description": "<p>Área de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Localização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n           {\n               id: 1,\n               name: \"System Operations & Monitoring\",\n               candidateDescript: \"12º Ano em área tecnológica ou frequência académica em Tecnológia; Orientação para o cliente; Conhecimentos em Operação de Sistemas (preferencial);Conhecimentos da língua Inglesa falada e escrita; Conhecimentos da língua Castelhana falada e escrita (preferencial); Disponibilidade para turnos 24*7;\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: false,\n               shifts: true,\n               location: 2,\n               area: 1,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 2,\n               name: \"Programador Junior\",\n               candidateDescript: \"Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.\",\n               remote: true,\n               formation: true,\n               travelOtCountrys: false,\n               shifts: false,\n               location: 1,\n               area: 1,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 3,\n               name: \"Analista Funcional Junior\",\n               candidateDescript: \"Recém-Licenciado em Engenharia Informática ou similares; Boa comunicação e atitude proativa, capacidade de definir e documentar processos; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.\",\n               remote: false,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 4,\n               area: 1,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 4,\n               name: \"Técnico de Informática/Recém-Licenciado\",\n               candidateDescript: \"Recém-Licenciado em Engenharia Informática ou similares; Interesse em técnologias IBM (iSeries; AS400) ; Bons conhecimentos Inglês; Disponibilidade\",\n               remote: false,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: true,\n               location: 3,\n               area: 1,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 5,\n               name: \"Business Intelligence (M/F)\",\n               candidateDescript: \"Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SQL/ETL (Datawarehouse); Capacidade de aprendizagem e evolução;\",\n               remote: true,\n               formation: true,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 5,\n               area: 1,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 6,\n               name: \"Consultor SAP Junior Logística\",\n               candidateDescript: \"Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SAP Logística; Experiência até 1 ano em SAP Logística; Apetência para o trabalho em equipa;\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 4,\n               area: 1,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 7,\n               name: \"System Administrator\",\n               candidateDescript: \"Licenciatura em Engenharia Informática ou equivalente; Experiência em Administração de Sistemas Windows Server ou Linux (valorizado 3 ou mais anos de experiência); Conhecimentos em ambientes Windows Server (2003/2008/2012/2016: uma ou mais versões); Conhecimentos em ambientes Linux (Redhat/Debian/Ubuntu/SUSE: um ou mais Flavours); Conhecimentos Inglês; Conhecimento Castelhano (valorizado); Conhecimentos de redes TCP/IP;\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 1,\n               area: 1,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 8,\n               name: \"Analista de produção Mainframe\",\n               candidateDescript: \"Implementação e manutenção de cadeias e jobs em Control-M e IWS; Implementação e manutenção de calendários em Control-M e IWS; Manutenção das rotinas e utilitários base do Control-M e IWS; Análise e customização de JCL; Análise e resolução de cancelamentos em jobs no batch rotinado; Implementação e manutenção da submissão dos processos batch via CICS; Implementação e manutenção da submissão dos processos via FTSM; Análise à performance do batch para sugestão de melhorias - Performance Tuning. \",\n               remote: false,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 2,\n               area: 2,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 9,\n               name: \"Adminsitrador de Sistemas Windows\",\n               candidateDescript: \"Administração de Sistemas Operativos Windows 10, 8 e 7; Distribuição de software, reporting e respectivo troubleshooting através de tools como por exemplo (SCCM 2012, 2016CB, Bigfix ou outras); Patch management de segurança; instalação, testes e distribuição; Consolas de Anti-virus (Mcafee, Symantec, Microsoft, …); Criação pacotes aplicacionais unattended; Implementação de imagens e soluções desktop, (por exemplo com SCCM, MDT, Ghost) e conhecimentos em scripts (ex PowerShell); Produção e documentação de processos e procedimentos técnicos; Domínio de Inglês técnico falado e escrito;\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 1,\n               area: 2,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 10,\n               name: \"Programador Web\",\n               candidateDescript: \"Licenciatura / Mestrado em Engenharia Informática ou Curso Técnico na área de Sistemas Informáticos; Domínios das tecnologias Web: Java, .Net, SQL , javascript; Capacidade de análise de requisitos /análise funcional e técnica;\tCapacidade de Gestão dos vários pedidos.\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: false,\n               shifts: false,\n               location: 3,\n               area: 2,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 11,\n               name: \"Administrador de Sistemas\",\n               candidateDescript: \"Windows Server (2003/2008/2012/2016); Linux (RedHat,Debian,Ubuntu); Conhecimentos de scripting, PowerShell; Conhecimentos comprovados de administração de sistemas Unix's - (Aix; Linux; HPUX, SunSolaris); Conhecimentos das línguas Inglesa e Castelhana falada e escrita; Conhecimentos de Redes TCP/IP;\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: false,\n               shifts: false,\n               location: 4,\n               area: 2,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 12,\n               name: \"Administrador de Sistemas Linux/Unix \",\n               candidateDescript: \"Conhecimentos sólidos Unix/Linux (Solaris / HP-UX / AIX / VIOS / HMC; Linux RedHat / Oracle; SSH / Sudo/ Suse); Conhecimentos de Redes TCP/IP; Pró-ativo e Dinamico.\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: false,\n               shifts: false,\n               location: 1,\n               area: 2,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 13,\n               name: \"Security Access Management Technician (M/F)\",\n               candidateDescript: \"Criação / remoção e edição de user (logical groups); Reset password, gestão de ticket com SLA; Niveis de Serviço, change management, revalidações de users , gerir regras e grupos; Conhecimentos avançados em AD - active directory.\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 5,\n               area: 2,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 14,\n               name: \"Operação de Sistemas e Monitorização\",\n               candidateDescript: \"12º Ano em área tecnológica ou frequência académica em Tecnologia; Conhecimentos em Operação de Sistemas (preferencial); Conhecimentos em Operação de Sistemas mainframe (preferencial); Disponibilidade para turnos 24*7; Espírito de Equipa; Orientação para o cliente; Conhecimentos da língua Inglesa e falada e escrita;\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: false,\n               shifts: true,\n               location: 2,\n               area: 2,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 15,\n               name: \"Software Developer-J2EE\",\n               candidateDescript: \" Experiência profissional pelo menos de menos 2/3 anos com J2EE; Experiência no desenvolvimento de aplicações para a web; Conhecimentos de Bases de Dados; Bons conhecimentos de inglês falado e escrito.\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: false,\n               shifts: false,\n               location: 1,\n               area: 3,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 16,\n               name: \"Analista Funcional\",\n               candidateDescript: \"Formação superior em Informática, Informática de Gestão ou Engenharias; Experiência em análise funcional, levantamento de requisitos, etc; Conhecimento na área de utilities; Mais de 5 ano experiência; Apetência para o trabalho em equipa; \",\n               remote: false,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 4,\n               area: 3,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 17,\n               name: \"Perfil Javascript\",\n               candidateDescript: \" Formação em engenharia informática, matemática ou similar; Perfil com 2 anos de experiência em desenvolvimento em javascript, NodeJS, Frontend Frameworks CSS, HTML5; Vontade de aprender e conhecer novas tecnologias.\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: false,\n               shifts: false,\n               location: 2,\n               area: 3,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 18,\n               name: \"Programador\",\n               candidateDescript: \"Formação superior em Engenharia Informática ou similares; Gosto por trabalhar com tecnologias como: HTLM, JAVA, .net; PL-SQL ; BD Relacional: oracle ; Big Data: Spark, Python, HQL; Versionamento: GIT \",\n               remote: true,\n               formation: false,\n               travelOtCountrys: false,\n               shifts: false,\n               location: 2,\n               area: 3,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 19,\n               name: \"Analista Programador/Analista Orgânico\",\n               candidateDescript: \" Formação superior em Engenharia Informática ou similares; Gosto por trabalhar com tecnologias como: Front-end: Angular 6 (HTML, JavaScript, SCSS, nodeJS, TypeScript) , Back-end: Java SpringBoot, BD Relacional: PostreSQL, Big Data: Spark, Python, HQL; Versionamento: GIT; Gosto por trabalhar em projetos multiculturais, com equipas remotas e com recurso a metodologias ágeis.\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 5,\n               area: 3,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 20,\n               name: \"Consultores Java\",\n               candidateDescript: \"Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento Java/web; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito;\",\n               remote: false,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 1,\n               area: 3,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 21,\n               name: \"Consultores .NET\",\n               candidateDescript: \"Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento .net c#, asp.net ou vb.net; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito.\",\n               remote: false,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 4,\n               area: 3,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               id: 22,\n               name: \"Product Owner\",\n               candidateDescript: \"Formação superior em Engenharia Informática ou similares; Análise funcional, levantamento de requisitos; Experiência na metodologia SCRUM;Certificação de testes funcionais de acordo com as especificações; Conhecimentos de banca, com vocação para fazer análise;\",\n               remote: true,\n               formation: false,\n               travelOtCountrys: true,\n               shifts: false,\n               location: 3,\n               area: 3,\n               createdAt: \"2019-06-13T15:24:13.000Z\",\n               updatedAt: \"2019-06-13T15:24:13.000Z\"\n           }\n       ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido de Vagas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiVagas.js",
    "groupTitle": "Jobs",
    "name": "GetApiJobs"
  },
  {
    "type": "get",
    "url": "/api/jobs/area/:area",
    "title": "Pedido das Vagas disponíveis para uma determinada Área",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objetc[]",
            "optional": false,
            "field": "job",
            "description": "<p>Lista de Vagas para uma determnada área</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidateDescript",
            "description": "<p>Descrição do Candidato à Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "remote",
            "description": "<p>Trabalho remoto</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "formation",
            "description": "<p>Formação Inicial</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "travelOtCountrys",
            "description": "<p>Viajar para outros países</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "shifts",
            "description": "<p>Turnos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Localização de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "area",
            "description": "<p>Área de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n           {\n               \"id\": 1,\n               \"name\": \"System Operations & Monitoring\",\n               \"candidateDescript\": \"12º Ano em área tecnológica ou frequência académica em Tecnológia; Orientação para o cliente; Conhecimentos em Operação de Sistemas (preferencial);Conhecimentos da língua Inglesa falada e escrita; Conhecimentos da língua Castelhana falada e escrita (preferencial); Disponibilidade para turnos 24*7;\",\n               \"remote\": true,\n               \"formation\": false,\n               \"travelOtCountrys\": false,\n               \"shifts\": true,\n               \"location\": 2,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 2,\n               \"name\": \"Programador Junior\",\n               \"candidateDescript\": \"Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.\",\n               \"remote\": true,\n               \"formation\": true,\n               \"travelOtCountrys\": false,\n               \"shifts\": false,\n               \"location\": 1,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 3,\n               \"name\": \"Analista Funcional Junior\",\n               \"candidateDescript\": \"Recém-Licenciado em Engenharia Informática ou similares; Boa comunicação e atitude proativa, capacidade de definir e documentar processos; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.\",\n               \"remote\": false,\n               \"formation\": false,\n               \"travelOtCountrys\": true,\n               \"shifts\": false,\n               \"location\": 4,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 4,\n               \"name\": \"Técnico de Informática/Recém-Licenciado\",\n               \"candidateDescript\": \"Recém-Licenciado em Engenharia Informática ou similares; Interesse em técnologias IBM (iSeries; AS400) ; Bons conhecimentos Inglês; Disponibilidade\",\n               \"remote\": false,\n               \"formation\": false,\n               \"travelOtCountrys\": true,\n               \"shifts\": true,\n               \"location\": 3,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 5,\n               \"name\": \"Business Intelligence (M/F)\",\n               \"candidateDescript\": \"Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SQL/ETL (Datawarehouse); Capacidade de aprendizagem e evolução;\",\n               \"remote\": true,\n               \"formation\": true,\n               \"travelOtCountrys\": true,\n               \"shifts\": false,\n               \"location\": 5,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 6,\n               \"name\": \"Consultor SAP Junior Logística\",\n               \"candidateDescript\": \"Formação superior em Informática, Informática de Gestão ou Engenharias; Conhecimentos de SAP Logística; Experiência até 1 ano em SAP Logística; Apetência para o trabalho em equipa;\",\n               \"remote\": true,\n               \"formation\": false,\n               \"travelOtCountrys\": true,\n               \"shifts\": false,\n               \"location\": 4,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 7,\n               \"name\": \"System Administrator\",\n               \"candidateDescript\": \"Licenciatura em Engenharia Informática ou equivalente; Experiência em Administração de Sistemas Windows Server ou Linux (valorizado 3 ou mais anos de experiência); Conhecimentos em ambientes Windows Server (2003/2008/2012/2016: uma ou mais versões); Conhecimentos em ambientes Linux (Redhat/Debian/Ubuntu/SUSE: um ou mais Flavours); Conhecimentos Inglês; Conhecimento Castelhano (valorizado); Conhecimentos de redes TCP/IP;\",\n               \"remote\": true,\n               \"formation\": false,\n               \"travelOtCountrys\": true,\n               \"shifts\": false,\n               \"location\": 1,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido das Vagas\"\n}",
          "type": "json"
        },
        {
          "title": "Vagas não encontradas",
          "content": "HTTP/1.1 404 Not Found\n{\n  erro: \"A Área pretendida não existe!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiVagas.js",
    "groupTitle": "Jobs",
    "name": "GetApiJobsAreaArea"
  },
  {
    "type": "get",
    "url": "/api/jobs/:id",
    "title": "Pedido das informações de uma Vaga",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objetc[]",
            "optional": false,
            "field": "job",
            "description": "<p>Contém um determinada Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidateDescript",
            "description": "<p>Descrição do Candidato à Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "remote",
            "description": "<p>Trabalho remoto</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "formation",
            "description": "<p>Formação Inicial</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "travelOtCountrys",
            "description": "<p>Viajar para outros países</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "shifts",
            "description": "<p>Turnos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Localização de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "area",
            "description": "<p>Área de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n            {\n                \"id\": 1,\n                \"name\": \"System Operations & Monitoring\",\n                \"candidateDescript\": \"12º Ano em área tecnológica ou frequência académica em Tecnológia; Orientação para o cliente; Conhecimentos em Operação de Sistemas (preferencial);Conhecimentos da língua Inglesa falada e escrita; Conhecimentos da língua Castelhana falada e escrita (preferencial); Disponibilidade para turnos 24*7;\",\n                \"remote\": true,\n                \"formation\": false,\n                \"travelOtCountrys\": false,\n                \"shifts\": true,\n                \"location\": 2,\n                \"area\": 1,\n                \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n                \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n            }\n        ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido da Vaga\"\n}",
          "type": "json"
        },
        {
          "title": "Vaga não encontrada",
          "content": "HTTP/1.1 404 Not Found\n{\n  erro: \"Não é possível encontrar a Vaga!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiVagas.js",
    "groupTitle": "Jobs",
    "name": "GetApiJobsId"
  },
  {
    "type": "get",
    "url": "/api/jobs/location/:location",
    "title": "Pedido das Vagas disponíveis para uma determinada Localização",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objetc[]",
            "optional": false,
            "field": "jobsLocation",
            "description": "<p>Lista de Vagas de uma dada Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidateDescript",
            "description": "<p>Descrição do Candidato à Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "remote",
            "description": "<p>Trabalho remoto</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "formation",
            "description": "<p>Formação Inicial</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "travelOtCountrys",
            "description": "<p>Viajar para outros países</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "shifts",
            "description": "<p>Turnos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Localização de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "area",
            "description": "<p>Área de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n       [\n           {\n               \"id\": 2,\n               \"name\": \"Programador Junior\",\n               \"candidateDescript\": \"Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.\",\n               \"remote\": true,\n               \"formation\": true,\n               \"travelOtCountrys\": false,\n               \"shifts\": false,\n               \"location\": 1,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 7,\n               \"name\": \"System Administrator\",\n               \"candidateDescript\": \"Licenciatura em Engenharia Informática ou equivalente; Experiência em Administração de Sistemas Windows Server ou Linux (valorizado 3 ou mais anos de experiência); Conhecimentos em ambientes Windows Server (2003/2008/2012/2016: uma ou mais versões); Conhecimentos em ambientes Linux (Redhat/Debian/Ubuntu/SUSE: um ou mais Flavours); Conhecimentos Inglês; Conhecimento Castelhano (valorizado); Conhecimentos de redes TCP/IP;\",\n               \"remote\": true,\n               \"formation\": false,\n               \"travelOtCountrys\": true,\n               \"shifts\": false,\n               \"location\": 1,\n               \"area\": 1,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 9,\n               \"name\": \"Adminsitrador de Sistemas Windows\",\n               \"candidateDescript\": \"Administração de Sistemas Operativos Windows 10, 8 e 7; Distribuição de software, reporting e respectivo troubleshooting através de tools como por exemplo (SCCM 2012, 2016CB, Bigfix ou outras); Patch management de segurança; instalação, testes e distribuição; Consolas de Anti-virus (Mcafee, Symantec, Microsoft, …); Criação pacotes aplicacionais unattended; Implementação de imagens e soluções desktop, (por exemplo com SCCM, MDT, Ghost) e conhecimentos em scripts (ex PowerShell); Produção e documentação de processos e procedimentos técnicos; Domínio de Inglês técnico falado e escrito;\",\n               \"remote\": true,\n               \"formation\": false,\n               \"travelOtCountrys\": true,\n               \"shifts\": false,\n               \"location\": 1,\n               \"area\": 2,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 12,\n               \"name\": \"Administrador de Sistemas Linux/Unix \",\n               \"candidateDescript\": \"Conhecimentos sólidos Unix/Linux (Solaris / HP-UX / AIX / VIOS / HMC; Linux RedHat / Oracle; SSH / Sudo/ Suse); Conhecimentos de Redes TCP/IP; Pró-ativo e Dinamico.\",\n               \"remote\": true,\n               \"formation\": false,\n               \"travelOtCountrys\": false,\n               \"shifts\": false,\n               \"location\": 1,\n               \"area\": 2,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 15,\n               \"name\": \"Software Developer-J2EE\",\n               \"candidateDescript\": \" Experiência profissional pelo menos de menos 2/3 anos com J2EE; Experiência no desenvolvimento de aplicações para a web; Conhecimentos de Bases de Dados; Bons conhecimentos de inglês falado e escrito.\",\n               \"remote\": true,\n               \"formation\": false,\n               \"travelOtCountrys\": false,\n               \"shifts\": false,\n               \"location\": 1,\n               \"area\": 3,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 20,\n               \"name\": \"Consultores Java\",\n               \"candidateDescript\": \"Licenciados na área de Engenharia Informática, Informática de Gestão, Sistemas de Informação; Experiência mínima de 2 anos em desenvolvimento Java/web; Excelentes capacidades de comunicação (oral e escrita) e de relacionamento interpessoal; Bom inglês falado e escrito;\",\n               \"remote\": false,\n               \"formation\": false,\n               \"travelOtCountrys\": true,\n               \"shifts\": false,\n               \"location\": 1,\n               \"area\": 3,\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 23,\n               \"name\": \"Developer de mobile\",\n               \"candidateDescript\": \"Saber de tecnologia com a finalidade de desenvolvimento mobile; Conhecimentos em Android Studio\",\n               \"remote\": null,\n               \"formation\": null,\n               \"travelOtCountrys\": null,\n               \"shifts\": null,\n               \"location\": 1,\n               \"area\": null,\n               \"createdAt\": \"2019-06-14T13:49:54.000Z\",\n               \"updatedAt\": \"2019-06-14T13:51:33.000Z\"\n           }\n       ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido das Vagas\"\n}",
          "type": "json"
        },
        {
          "title": "Vagas não encontradas",
          "content": "HTTP/1.1 404 Not Found\n{\n  erro: \"A Localização pretendida não existe!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiVagas.js",
    "groupTitle": "Jobs",
    "name": "GetApiJobsLocationLocation"
  },
  {
    "type": "post",
    "url": "/api/jobs/new",
    "title": "Criação de uma nova Vaga",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidateDescript",
            "description": "<p>Descrição do Candidato à Vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "remote",
            "description": "<p>Trabalho remoto</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "formation",
            "description": "<p>Formação Inicial</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "travelOtCountrys",
            "description": "<p>Viajar para outros países</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "shifts",
            "description": "<p>Turnos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Localização de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "area",
            "description": "<p>Área de uma dada vaga</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Localização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 23,\n    \"name\": \"Developer de mobile\",\n    \"candidateDescript\": \"Saber de tecnologia com a finalidade de desenvolvimento mobile; Conhecimentos em Android Studio\",\n    \"location\": \"1\",\n    \"updatedAt\": \"2019-06-14T13:49:54.906Z\",\n    \"createdAt\": \"2019-06-14T13:49:54.906Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiVagas.js",
    "groupTitle": "Jobs",
    "name": "PostApiJobsNew"
  },
  {
    "type": "put",
    "url": "/api/jobs/delete/:id",
    "title": "Eliminação de uma Vaga",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem que informa que a Vaga foi eliminada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"Vaga Eliminada!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiVagas.js",
    "groupTitle": "Jobs",
    "name": "PutApiJobsDeleteId"
  },
  {
    "type": "put",
    "url": "/api/jobs/update/:id",
    "title": "Atualização de uma Vaga",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem que informa que a Vaga foi atualizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"Vaga Atualizada com Sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiVagas.js",
    "groupTitle": "Jobs",
    "name": "PutApiJobsUpdateId"
  },
  {
    "type": "delete",
    "url": "/api/location/delete/:id",
    "title": "Eliminação de uma Localização",
    "group": "Locations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem que informa que a Localização foi eliminada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Localização Eliminada!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiLocalizacoes.js",
    "groupTitle": "Locations",
    "name": "DeleteApiLocationDeleteId"
  },
  {
    "type": "get",
    "url": "/api/location/:id",
    "title": "Pedido das informações de uma Localização",
    "group": "Locations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locations",
            "description": "<p>Lista de Localizações</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da localização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Localização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 2,\n        \"name\": \"Lisboa\",\n        \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n        \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido da Localização\"\n}",
          "type": "json"
        },
        {
          "title": "Localização não encontrada",
          "content": "HTTP/1.1 404 Not Found\n{\n  erro: \"Não é possível encontrar a Localização!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiLocalizacoes.js",
    "groupTitle": "Locations",
    "name": "GetApiLocationId"
  },
  {
    "type": "get",
    "url": "/api/locations",
    "title": "Pedido das Localizações existentes",
    "group": "Locations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locations",
            "description": "<p>Lista de Localizações</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Localização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n           {\n               \"id\": 1,\n               \"name\": \"Tomar\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 2,\n               \"name\": \"Lisboa\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 3,\n               \"name\": \"Viseu\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 4,\n               \"name\": \"Porto\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 5,\n               \"name\": \"Coimbra\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido das Localizações\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiLocalizacoes.js",
    "groupTitle": "Locations",
    "name": "GetApiLocations"
  },
  {
    "type": "post",
    "url": "/api/location/new",
    "title": "Criação de uma nova Localização",
    "group": "Locations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Localização</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Localização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 6,\n    \"name\": \"Santarém\",\n    \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n    \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiLocalizacoes.js",
    "groupTitle": "Locations",
    "name": "PostApiLocationNew"
  },
  {
    "type": "put",
    "url": "/api/location/update/:id",
    "title": "Atualização de uma Localização",
    "group": "Locations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem que informa que a Localização foi atualizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Localização Atualizada Sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiLocalizacoes.js",
    "groupTitle": "Locations",
    "name": "PutApiLocationUpdateId"
  },
  {
    "type": "delete",
    "url": "/api/users/delete/:id",
    "title": "Eliminação de um Utilizador",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem que informa que o Utilizador foi eliminado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Utilizador Eliminado!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiUtilizadores.js",
    "groupTitle": "Users",
    "name": "DeleteApiUsersDeleteId"
  },
  {
    "type": "get",
    "url": "/api/jobs/:id",
    "title": "Pedido das informações de um utilizador",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Lista de Utilizadores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"name\": \"Andreia Ferreira\",\n        \"username\": \"admin1\",\n        \"password\": \"$2b$08$Fh6Y6zd4zsHP1igb15PK0.cI2O6y48jYj1zP4m6MbTylOtPKDwqk.\",\n        \"email\": \"aferreira@hotmail.com\",\n        \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n        \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n    }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no Pedido do Utilizador\"\n}",
          "type": "json"
        },
        {
          "title": "Utilizador não encontrado",
          "content": "HTTP/1.1 404 Not Found\n{\n  erro: \"Não é possível encontrar o Utilizador!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiUtilizadores.js",
    "groupTitle": "Users",
    "name": "GetApiJobsId"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Pedido dos Utilizadores existentes",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Lista de Utilizadores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n           {\n               \"id\": 1,\n               \"name\": \"Andreia Ferreira\",\n               \"username\": \"admin1\",\n               \"password\": \"$2b$08$Fh6Y6zd4zsHP1igb15PK0.cI2O6y48jYj1zP4m6MbTylOtPKDwqk.\",\n               \"email\": \"aferreira@hotmail.com\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           },\n           {\n               \"id\": 2,\n               \"name\": \"André Santos\",\n               \"username\": \"admin2\",\n               \"password\": \"$2b$08$wklXozkQ266hgRm2y6f7KOcjZPTLdKOVTp35TbRKnbj0hmrzNVrBW\",\n               \"email\": \"asantos@hotmail.com\",\n               \"createdAt\": \"2019-06-13T15:24:13.000Z\",\n               \"updatedAt\": \"2019-06-13T15:24:13.000Z\"\n           }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no Servidor",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  erro: \"Erro no pedido dos Utilizadores\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiUtilizadores.js",
    "groupTitle": "Users",
    "name": "GetApiUsers"
  },
  {
    "type": "post",
    "url": "/api/users/new",
    "title": "Criação de um novo Utilizador",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passwrod do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>do Utilizador</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação da Área</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última atualização da Área</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "    HTTP/1.1 200 OK\n\n{\n            \"id\": 3,\n            \"name\": \"Ana Ribeiro\",\n            \"username\": \"admin3\",\n            \"password\": \"$2b$08$MFv6NAaTTgnG70FVzJFjae3M.oCctptl/g8Fn5v7c9.KCt.fMr2gK\",\n            \"email\": \"aribeiro@hotmail.com\",\n            \"updatedAt\": \"2019-06-14T14:45:35.023Z\",\n            \"createdAt\": \"2019-06-14T14:45:35.023Z\"\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiUtilizadores.js",
    "groupTitle": "Users",
    "name": "PostApiUsersNew"
  },
  {
    "type": "put",
    "url": "/api/users/update/:id",
    "title": "Atualização de um Utilizador",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem que informa que o Utilizador foi atualizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Utilizador Atualizado com Sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiUtilizadores.js",
    "groupTitle": "Users",
    "name": "PutApiUsersUpdateId"
  }
] });
