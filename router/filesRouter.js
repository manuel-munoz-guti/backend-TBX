const router = require('express').Router()
const { getAllFilesDataController, getListController, getFileDataController } = require('../controllers/filesController')

router.get('/data', getFileDataController, getAllFilesDataController)
router.get('/list', getListController)

module.exports = router
