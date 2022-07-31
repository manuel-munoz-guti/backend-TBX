const axios = require('axios')
const { BASE_URL, TIMEOUT, AUTH_TOKEN } = require('./config')

const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
})

module.exports = api
