/*
Author: Emad Bin Abid
Start day: Tuesday, June 19' 2018
*/

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
                res.status(401).send('Unauthorized');
            }
            else
            {
                if(!dbObject.firstName)
                {
                    res.status(401).send('Unauthorized');
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

//Verifying the token.
exports.verifyToken = function(req, res, next)
{
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined')
    {
        const token = bearerHeader.split(' ')[1];
        req.token = token;
        next();
    }
    else
    {
        res.status(401).send('Unauthorized');
    }
}