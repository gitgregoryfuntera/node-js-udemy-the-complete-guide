const { Router } = require("express");
const router = Router();
const adminData = require('./admin')

router.get(`/`, (req, res, next) => {
  res.render('user', {
    users: adminData.users,
    docTitle: 'User',
    hasUsers: adminData.users.length > 0,
    path: '/',
    userPath: true,
  })
});

module.exports = router;
