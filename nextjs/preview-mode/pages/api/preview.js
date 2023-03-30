import React from 'react'

export default function handler(req,res) {
 
    res.setPreviewData({user:"Ned"})
    // res.end("Preview mode enabled")
    res.redirect(req.query.redirect)
    // http://localhost:3000/api/preview?redirect=/news
}
 