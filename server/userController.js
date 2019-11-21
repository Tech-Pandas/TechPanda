

module.exports = {
    // getUser: (req, res) => {
    //     console.log('REQ', req.session)
    //     if(req.session.user){
    //         res.status(200).send(req.session.user)            
    //     } else {
    //         res.status(500).send('No user on session. ')
    //     }
    // }
    getUsers: async (req, res, next) => {
        const dbInstance = req.app.get('db');
        let users = await dbInstance.get_users()
        res.status(200).send(users)
      },
}