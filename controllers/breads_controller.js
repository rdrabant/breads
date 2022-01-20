const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// DEPENDENCIES
const methodOverride = require('method-override')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread
      }
    )
  // res.send(Bread)
})

// CREATE
breads.post('/', (req, res) => {
  console.log(req.body)
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten === 'true'
  } else {
    req.body.hasGlutten === 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

//Delete
breads.delete('/:indexArray', (req, res) => {
  Bread.slice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.render('404')
  }
})

module.exports = breads