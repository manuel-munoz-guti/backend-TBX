const response = require('express');
const axios = require('axios');
const api = require('../api_external/api');
const { API_PATH } = require('../api_external/config');



const getAllFilesService = async () => {
    try {
        const response = await api.get(API_PATH.SECRET_FILES);
        return response;
    }
    catch (err) {
        return err.response;
    }
}

const getFileByName = async (name) => {
    try {
        const response = await api.get(`${API_PATH.SECRET_FILE}/${name}`);
        return response;
    }
    catch (err) {
        return err.response;
    }
}


module.exports = {
    getAllFilesService,
    getFileByName
}