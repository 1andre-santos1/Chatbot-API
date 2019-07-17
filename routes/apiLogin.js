const bcrypt = require('bcrypt');
const session = require('express-session');
const jwt = require('jsonwebtoken');

module.exports = function(app, db){
  
    //LOGIN
    app.post('/login', function(req, res){
        
        console.log(req.body)
        //variáveis recebidas -> username e password recebidos
        var serverResponse = {status: "não autenticado", response: {}, token: {}};
        var username = req.body.username;
        var password = req.body.password;


        //foram recebidos dados
        if (username && password) {

            db.Users.findOne({
                where: {
                    username: req.body.username
                }
            }).then(function (users) {
                if (!users) {
                    serverResponse.status = "O utilizador não existe";
                    //res.send('O utilizador não existe!');
                    //res.end();
                    return res.send(serverResponse);
                }
                else {
                    //compara a password inserida pelo utilizador, com a password da BD
                    bcrypt.compare(password, users.password, function (err, result) {
                        if (result == true) {
                            var token = jwt.sign({ username: users.username, id: users.id} , 'chave', {
                                expiresIn: 600 //duração do token
                            })
                            serverResponse.status="Password Correta!";
                            serverResponse.response = users;
                            serverResponse.token = token;
                            //res.send('Password Correta! User In' + " token: " + token);

                            
                            //req.session.loggedin = true;
				            //req.session.username = username;
                           // res.end();

                        }
                        else {
                            serverResponse.status="Password errada!";

                            //res.send('Password Errada!');
                            //res.end();

                        }
                        //res.end();
                        return res.send(serverResponse);
                    });

                }
            })
        }
        else{
            res.send('Por favor, insira ou o username ou a sua password!');
            res.end();
        }

    });

    //LOGOUT
    app.post('/logout', function (req, res) {
        //apaga as variaveis de sessão
        req.session.loggedin = false;
        req.session.username = null;
        console.log("Utilizador fez logout");
        //redireciona para a página de login - falta codigo - neste momento apenas manda mensagem
        res.send('Utilizador logoutado!');
        res.end();
    });
}