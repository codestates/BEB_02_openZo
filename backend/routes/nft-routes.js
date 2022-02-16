const express = require('express')
const router = express.Router();
const NftController = require('../controller/NftController')

router.get('/', NftController.getNftList);
router.get('/:tokenId', NftController.getNftInfoByTokenId)

module.exports = router