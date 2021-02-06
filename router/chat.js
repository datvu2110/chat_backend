const router = require('express').Router()
const { index, create, messages, deleteChat, imageUpload, addUserToGroup, leaveCurrentChat } = require('../controllers/chatController')
const { validate } = require('../validators')
const { auth } = require('../middleware/auth')
const { chatFile } = require('../middleware/fileUpload')

router.get('/', [auth], index)
router.get('/messages', [auth], messages)
router.post('/create', [auth], create)
router.post('/upload-image', [auth, chatFile], imageUpload)
router.post('/leave-current-chat', auth, leaveCurrentChat)
router.delete('/:id', [auth], deleteChat)

module.exports = router