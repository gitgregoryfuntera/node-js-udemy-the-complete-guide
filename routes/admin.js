const path = require('path')
const { Router } = require("express");

const router = Router();

router.get(`/add-user`, (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
});

router.post(`/user`, (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'user.html'));
});

module.exports = router;
