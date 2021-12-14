const router = require('express').Router(), db = require('../models/dbConnection')

router.get('/', (req, res) =>{
    res.json('Hello')
})
router.get('/students', async (req, res) => {
    let SQL = "SELECT * FROM users ORDER BY username ASC"
    await db.query(SQL, (err, data)=>{
        if(err) throw err
        res.json({data})
    })
})

router.get('/students/get', (req, res) =>{
    res.json('Get a student')
})


module.exports = router