//Dependencies

//Validating User on /login request.

exports.validateUser = function(expressInstance, jwtInstance, userModelInstance)
{
    //Validating User.
    expressInstance.post('/login', (req, res) => 
    {
        /*UserModel.findOne() --> 
        req.body = 
        {
            "user": 
            {
                "email": "xyz",
                "password": "xyz"
            }
        }*/
        userModelInstance.findOne(req.body.user, (err, dbObject) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                if(!dbObject.firstName)
                {
                    res.status(401).send("Unauthorized");
                }
                else
                {
                    jwtInstance.sign(req.body, 'secretkey', (err, token) => 
                    {
                        if(err)
                        {

                        }
                        else
                        {
                            res.json({"user": dbObject, "token": token});
                        }
                    });
                }
            }
        });
    });
}