const path = require('path')
const { Router } = require("express");
const rootDir = require('../util/path')
const router = Router();
const users = []

router.get(`/add-user`, (req, res, next) => {
  res.render('add-user', {
    docTitle: 'Add User',
    path: '/admin/add-user',
    addUserPath: true
  })
  // res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

router.post(`/add-user`, (req, res, next) => {
  const { body: { user } } = req
  users.push({
    user,
  })
  res.redirect('/')
});


module.exports = {
  router,
  users
}
