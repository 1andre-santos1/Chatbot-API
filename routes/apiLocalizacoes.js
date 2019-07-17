//API para a localização

module.exports = function (app, db) {
    //Métodos CRUD

    /**
     * @api {get} /api/locations Pedido das Localizações existentes
     * @apiGroup Locations 
     * 
     * @apiSuccess {Object[]} locations Lista de Localizações
     * @apiSuccess {Number} id ID da Localização
     * @apiSuccess {String} name  Nome da Localização
     * @apiSuccess {DateTime} createdAt Data da criação da Localização
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Localização
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  [
            {
                "id": 1,
                "name": "Tomar",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 2,
                "name": "Lisboa",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 3,
                "name": "Viseu",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 4,
                "name": "Porto",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 5,
                "name": "Coimbra",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            }
     *  ]
     *
     * @apiErrorExample {json} Erro no Servidor
     *  HTTP/1.1 500 Internal Server Error
     *  {
     *    erro: "Erro no Pedido das Localizações"
     *  }
     */

    //Listar localização
    app.get('/api/locations', function (req, res) {
        db.Locations.findAll({

        }).then(function (result) {
            res.json(result);
        }).catch(function(err){
            console.error("Erro get Localizações", err)
            res.status(500).json({ erro: "Erro no Pedido das Localizações" })
        
    });
    });

    /**
     * @api {post} /api/location/new Criação de uma nova Localização
     * @apiGroup Locations 
     *
     * @apiSuccess {Number} id ID da Localização
     * @apiSuccess {String} name  Nome da Localização
     * @apiSuccess {DateTime} createdAt Data da criação da Localização
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Localização
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  {
     *      "id": 6,
     *      "name": "Santarém",
     *      "createdAt": "2019-06-13T15:24:13.000Z",
     *      "updatedAt": "2019-06-13T15:24:13.000Z"
     *  }
     */
    app.post('/api/location/new', function (req, res) {
        db.Locations.create({
            name: req.body.name,
        }).then(function (results) {
            res.json(results);
        })
    });


    /**
     * @api {put} /api/location/update/:id Atualização de uma Localização
     * @apiGroup Locations 
     * 
     *  @apiSuccess {String} message Mensagem que informa que a Localização foi atualizada 
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  {
     *      "message": "Localização Atualizada Sucesso!"
     *  }
     */
    app.put('/api/location/update/:id', function (req, res) {
        db.Locations.update({
            name: req.body.name,

        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json({message: "Localização Atualizada com Sucesso!"});
            })
    });

    /**
     * @api {delete} /api/location/delete/:id Eliminação de uma Localização
     * @apiGroup Locations 
     * 
     *  @apiSuccess {String} message Mensagem que informa que a Localização foi eliminada 
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  {
     *      "message": "Localização Eliminada!"
     *  }
     */
    app.delete('/api/location/delete/:id', function (req, res) {
        db.Locations.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json({message: "Localização Eliminada!"});
        });
    });

    /**
     * @api {get} /api/location/:id Pedido das informações de uma Localização
     * @apiGroup Locations 
     * 
     * @apiSuccess {Object[]} locations Lista de Localizações
     * @apiSuccess {Number} id ID da localização
     * @apiSuccess {String} name  Nome da Localização
     * @apiSuccess {DateTime} createdAt Data da criação da Localização
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Localização
     * 
     * @apiSuccessExample {json} Sucesso
     *  HTTP/1.1 200 OK
     *  [
     *      {
     *          "id": 2,
     *          "name": "Lisboa",
     *          "createdAt": "2019-06-13T15:24:13.000Z",
     *          "updatedAt": "2019-06-13T15:24:13.000Z"
     *      }
     *  ]
     * @apiErrorExample {json} Erro no Servidor
     *  HTTP/1.1 500 Internal Server Error
     *  {
     *    erro: "Erro no Pedido da Localização"
     *  }
     *
     * @apiErrorExample {json} Localização não encontrada
     *  HTTP/1.1 404 Not Found
     *  {
     *    erro: "Não é possível encontrar a Localização!"
     *  }
     */
    app.get('/api/location/:id', function (req, res) {
        db.Locations.findAll({
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
                res.status(404).json({ erro: "Não é possível encontrar a Localização!" });
            }
            else{
                res.json(results);
            }
        }).catch(function(err){
            console.error("Erro get Áreas", err)
            res.status(500).json({ erro: "Erro no pedido da Localização" })
        });
    });


}
