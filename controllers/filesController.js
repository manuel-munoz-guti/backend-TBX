
const response = require('express');
const { formattingFile } = require('../helper/formattingFile');
const { getAllFilesService, getFileByName } = require('../services/filesServices');

const getAllfilesDataController = async (req, res = response, next) => {

    let adapterResponse = [];

    const respExternalAPI = await getAllFilesService();
    
    if(respExternalAPI.status === 200){

        const { files } = respExternalAPI.data;

        for( let fileName of files){

            let fileContent = await getFileByName(fileName);

            if(fileContent.status === 200){
                adapterResponse = [ ...adapterResponse, {
                    "file": fileName,
                    "lines": formattingFile( fileContent.data,fileName )
                }];          
            } 
        }
        return res.status(200).json({
            ok: true,
            data: adapterResponse
        });

    } else {
        return res.status(respExternalAPI.status).json({
            ok: false,
            msg: respExternalAPI.statusText,
            data: respExternalAPI.data
        });
    }
}

module.exports = {
    getAllfilesDataController
}