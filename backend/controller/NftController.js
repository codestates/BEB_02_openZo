exports.saveNftDb = async(req, res) => {
    let{ ipfsUrl } = req.params
    try{

    }catch (err){
        // error 처리
        // return res.status()
    }
};

//nft 전체리스트 조회
// TokenId, image, name
exports.getNftList = async(req,res) => {
    try{
        res.send("getNFTLIST")
        console.log('getNFT')

        
    }catch (err) {
        console.err(err)
    }
};

// tokenId로 Nft 정보 조회
// name, dexcription, onwerAddress
exports.getNftInfoByTokenId = async(req,res) => {
    try{

    }catch (err) {

    }
};
