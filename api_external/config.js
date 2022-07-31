require('dotenv').config()

const BASE_URL = 'http://echo-serv.tbxnet.com/v1'
const TIMEOUT = 5000
const API_PATH = {
  SECRET_FILES: '/secret/files',
  SECRET_FILE: '/secret/file'
}
const AUTH_TOKEN = `${process.env.API}`

module.exports = {
  BASE_URL,
  TIMEOUT,
  API_PATH,
  AUTH_TOKEN
}
