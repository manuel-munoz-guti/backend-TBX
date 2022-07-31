
const response = require('express')
const { formattingFile } = require('../helper/formattingFile')
const { getAllFilesService, getFileByName } = require('../services/filesServices')

const getAllFilesDataController = async (req, res = response, next) => {
  try {
    let adapterResponse = []

    const { statusText, status, data } = await getAllFilesService()

    if (status === 200) {
      const { files } = data
      for (const name of files) {
        const resposeFile = await getFileByName(name)
        if (resposeFile.status === 200) {
          const formattedFile = formattingFile(resposeFile.data, name)
          if (formattedFile.length) {
            adapterResponse = [...adapterResponse, { file: name, lines: formattedFile }]
          }
        }
      }
      return res.status(200).json({
        ok: true,
        data: adapterResponse
      })
    } else {
      return res.status(status).json({
        ok: false,
        msg: statusText,
        data
      })
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }
}

const getFileDataController = async (req, res = response, next) => {
  try {
    const { fileName: queryName } = req.query
    const fileFound = []
    if (queryName) {
      const { data, status, statusText } = await getFileByName(queryName)
      if (status === 200) {
        const formattedFile = formattingFile(data, queryName)
        if (formattedFile.length) {
          fileFound.push({ file: queryName, lines: formattedFile })
        }
        return res.status(200).json({
          ok: true,
          data: fileFound
        })
      } else {
        return res.status(status).json({
          ok: false,
          msg: statusText,
          data
        })
      }
    } else {
      next()
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }
}

const getListController = async (req, res = response, next) => {
  try {
    const { statusText, status, data } = await getAllFilesService()

    if (status === 200) {
      return res.status(200).json({
        ok: true,
        data
      })
    } else {
      return res.status(status).json({
        ok: false,
        msg: statusText,
        data
      })
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server error'
    })
  }
}

module.exports = {
  getAllFilesDataController,
  getListController,
  getFileDataController
}
