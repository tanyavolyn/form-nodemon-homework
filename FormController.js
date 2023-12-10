const Form = require('./FormModel');

module.exports.getForm = (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
}

module.exports.postForm = (req,res) => {
    let newForm = new Form({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newForm.save()
    res.sendFile(__dirname + "/public/answer.html")
}