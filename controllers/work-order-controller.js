const getWorkOrders = async (req, res, next) => {
    const tasks = [];
    res.render("users/work-order", {
      tasks,
      docTitle: "Work Orders",
      path: "/work-order",
    });
  };
  
  module.exports = {
    getWorkOrders,
  };