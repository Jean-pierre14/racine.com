const exp = require('express'), {success, error} = require('consola'), cors = require('cors')
const app = exp(), PORT = process.env.PORT || 7000

// Middlewares
app.use(cors())
app.use('/', require('./routers/index'))

app.listen(PORT, (e)=> {
    if(e) error({message: `${e}`, badge: true})
    success({message: `Server run on port ${PORT}`, badge: true})
})