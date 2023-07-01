const { Router } = require("express");
const path = require('path')
const rootDir = require('../util/path')
const router = Router();

router.get(`/`, (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

module.exports = router;
