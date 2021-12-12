const exp = require('express'), {success, error} = require('consola')

const app = exp(), PORT = process.env.PORT || 7000

app.get('/', (req, res)=>{
    res.json("Hello")
})

app.listen(PORT, (e)=>{
    if(e) error({message: `${e}`, badge: true})
    success({message: `Server run on port ${PORT}`, badge: true})
})