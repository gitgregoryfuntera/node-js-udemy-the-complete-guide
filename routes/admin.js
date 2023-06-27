const { Router } = require("express");

const router = Router();

router.get(`/add-user`, (req, res, next) => {
  res.send(`
    <form method="POST" action="/admin/user" >
      <input type="text" name="user"/>
      <button type="submit">Submit</button>
    </form>
    `);
});

router.post(`/user`, (req, res, next) => {
  res.send(`<h1>Hello User</h1>`);
});

module.exports = router;
