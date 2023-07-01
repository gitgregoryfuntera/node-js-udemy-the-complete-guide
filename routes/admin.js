const path = require('path')
const { Router } = require("express");
const rootDir = require('../util/path')
const router = Router();

router.get(`/add-user`, (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

router.post(`/user`, (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

module.exports = router;
