const axios = require('axios');
const NftDataModel = require('../model/NFTs')

exports.saveNftDb = async(req, res) => {
    // TEST 용 추후 webSocket으로 진행

    const tokenURI = eq.body.tokenURI
    
    try{
        axios({
            method : 'get',
            url: tokenURI
        }).then((_res) => {
            const Nft = new NftDataModel({
                tokeId: req.body.tokenId,    // tokenId
                creator: req.body.creator, // 생성자 수정
                description: _res.data.description,
                image: _res.data.image,
                name: _res.data.name,
                ownerAddress: req.body.creator, // 옮긴사람
            });
            
            Nft.save(function (err) { 
                if(err) {
                    return res.status(502).send("tokenId is already save")
                }else{
                    return res.status(201).send("Success save data")
                }
             })
        })
    }catch (err){
        // error 처리
        return res.status(400).send("Post error")
    }
};

//nft 전체리스트 조회
// TokenId, image, name
exports.getNftList = async(req,res) => {
    try{

        const NftList = await NftDataModel.find().exec();
        return res.status(201).json({data: NftList});      
        
    }catch (err) {
        return res.status(404).send("Error");
    }
};

// tokenId로 Nft 정보 조회
exports.getNftInfoByTokenId = async(req,res) => {
    try{
        
        const NftFilterByTokenId = await NftDataModel.find({tokenId: req.params.tokeId}).exec();
        console.log(NftFilterByTokenId)
        return res.status(201).json({data: NftFilterByTokenId})

    }catch (err) {
        return res.status(404).send("error")

    }
};

// transfer시 db 업데이트
exports.updateOwnerAddr = async(req,res) => {
    try{
        
    }catch (err) {
        

    }
};
