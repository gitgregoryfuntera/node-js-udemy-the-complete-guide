const { Router } = require("express");
const path = require('path')
const rootDir = require('../util/path')
const router = Router();
const adminData = require('./admin')

router.get(`/`, (req, res, next) => {
  // console.log(adminData.users, 'users.js')

  // res.sendFile(path.join(rootDir, 'views', 'user.html'));
  res.render('user')
});

module.exports = router;
