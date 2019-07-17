const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = function (app, db) {
    //Métodos CRUD


    /** 
     * @api {get} /api/users Pedido dos Utilizadores existentes
     * @apiGroup Users 
     * 
     * @apiSuccess {Object[]} users Lista de Utilizadores
     * @apiSuccess {Number} id ID do Utilizador
     * @apiSuccess {String} name  Nome do Utilizador
     * @apiSuccess {String} password Password do Utilizador
     * @apiSuccess {String} username Username do Utilizador
     * @apiSuccess {String} email Email do Utilizador
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  [
            {
                "id": 1,
                "name": "Andreia Ferreira",
                "username": "admin1",
                "password": "$2b$08$Fh6Y6zd4zsHP1igb15PK0.cI2O6y48jYj1zP4m6MbTylOtPKDwqk.",
                "email": "aferreira@hotmail.com",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 2,
                "name": "André Santos",
                "username": "admin2",
                "password": "$2b$08$wklXozkQ266hgRm2y6f7KOcjZPTLdKOVTp35TbRKnbj0hmrzNVrBW",
                "email": "asantos@hotmail.com",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            }
     *  ]
     *
     * @apiErrorExample {json} Erro no Servidor
     *  HTTP/1.1 500 Internal Server Error
     *  {
     *    erro: "Erro no pedido dos Utilizadores"
     *  }      
     *
     */
    app.get('/api/users', function (req, res) {
        var token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).send({ auth: false, message: "Não existe token" }
            )
        }
        try {
            jwt.verify(token, 'chave');

            db.Users.findAll({

            }).then(function (result) {
                res.json(result);
            }).catch(function (err) {
                console.error("Erro get Utilizadores", err)
                res.status(500).json({ erro: "Erro no pedido dos Utilizadores" })
            });
        }
        catch{
            return res.send("Token expirou ou inválido");
        }

    });

    /**
     * @api {post} /api/users/new Criação de um novo Utilizador
     * @apiGroup Users
     * 
     * @apiSuccess {Number} id ID do utilizador
     * @apiSuccess {String} name  Nome do Utilizador
     * @apiSuccess {String} password Passwrod do Utilizador
     * @apiSUccess {String} username Username do Utilizador
     * @apiSuccess {String} email do Utilizador
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * 
     * {
            "id": 3,
            "name": "Ana Ribeiro",
            "username": "admin3",
            "password": "$2b$08$MFv6NAaTTgnG70FVzJFjae3M.oCctptl/g8Fn5v7c9.KCt.fMr2gK",
            "email": "aribeiro@hotmail.com",
            "updatedAt": "2019-06-14T14:45:35.023Z",
            "createdAt": "2019-06-14T14:45:35.023Z"
        }
     * 
     */
    app.post('/api/users/new', function (req, res) {
        var hashPassword = bcrypt.hashSync(req.body.password, 8);
        db.Users.create({
            name: req.body.name,
            username: req.body.username,
            password: hashPassword,
            email: req.body.email
        }).then(function (results) {
            res.json(results);
        })
    });


    /**
      * @api {put} /api/users/update/:id Atualização de um Utilizador
      * @apiGroup Users 
      * 
      *  @apiSuccess {String} message Mensagem que informa que o Utilizador foi atualizado 
      * 
      * @apiSuccessExample {json} Sucesso
      *  HTTP/1.1 200 OK
      *  {
      *      "message": "Utilizador Atualizado com Sucesso!"
      *  }
      */
    app.put('/api/users/update/:id', function (req, res) {
        db.Users.update({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        },
            {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json({ message: "Utilizador Atualizado com Sucesso!" });
            })
    });


    /**
      * @api {delete} /api/users/delete/:id Eliminação de um Utilizador
      * @apiGroup Users 
      * 
      *  @apiSuccess {String} message Mensagem que informa que o Utilizador foi eliminado 
      * 
      * @apiSuccessExample {json} Sucesso
      *  HTTP/1.1 200 OK
      *  {
      *      "message": "Utilizador Eliminado!"
      *  }
      */
    app.delete('/api/users/delete/:id', function (req, res) {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json({ message: "Utilizador Eliminado!" });
        });
    });


    /**
     * @api {get} /api/jobs/:id Pedido das informações de um utilizador
     * @apiGroup Users 
     * 
     * @apiSuccess {Object[]} users Lista de Utilizadores
     * @apiSuccess {Number} id ID do Utilizador
     * @apiSuccess {String} name  Nome do Utilizador
     * @apiSuccess {String} password Password do Utilizador
     * @apiSuccess {String} username Username do Utilizador
     * @apiSuccess {String} email Email do Utilizador
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  [
     *      {
     *          "id": 1,
     *          "name": "Andreia Ferreira",
     *          "username": "admin1",
     *          "password": "$2b$08$Fh6Y6zd4zsHP1igb15PK0.cI2O6y48jYj1zP4m6MbTylOtPKDwqk.",
     *          "email": "aferreira@hotmail.com",
     *          "createdAt": "2019-06-13T15:24:13.000Z",
     *          "updatedAt": "2019-06-13T15:24:13.000Z"
     *      }
     *   ]
     * @apiErrorExample {json} Erro no Servidor
     *  HTTP/1.1 500 Internal Server Error
     *  {
     *    erro: "Erro no Pedido do Utilizador"
     *  }
     *
     * @apiErrorExample {json} Utilizador não encontrado
     *  HTTP/1.1 404 Not Found
     *  {
     *    erro: "Não é possível encontrar o Utilizador!"
     *  }
     */
    app.get('/api/users/:id', function (req, res) {
        db.Users.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (results) {

            //função que permite saber se o objeto recebido está vazio
            function isEmpty(results) {
                // null é "empty"
                if (results == null) return true;
                // se o array tiver algo dentro dele
                if (results.length > 0) return false;
                console.log(results.length);
                //se o array não tiver lada dentro dele
                if (results.length === 0) return true
                return true;
            }
            //se o array dos resultados for vazio
            if (isEmpty(results) == true) {
                res.status(404).json({ erro: "Não é possível encontrar o Utilizador!" });
            }
            else {
                res.json(results);
            }
        }).catch(function (err) {
            console.error("Erro get Utilizadores", err)
            res.status(500).json({ erro: "Erro no pedido do Utilizador" })
        });
    });


}