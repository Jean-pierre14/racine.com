const router = require('express').Router()

router.get('/students', (req, res) =>{
    res.json('Students')
})

module.exports = router