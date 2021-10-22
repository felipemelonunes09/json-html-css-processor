const express = require('express')
const path = require('path')

const app = express();
const VERSION  = '0.0.1'

app.get(`/jhcp/modules/${VERSION}`, (req, res) =>  {
    
    console.log('Sending file')
    res.sendFile(path.join(__dirname, './', 'JHCP.js'))
})

module.exports = app;