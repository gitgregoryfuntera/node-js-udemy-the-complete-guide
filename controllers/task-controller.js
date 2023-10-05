const Task = require("../models/task-model");
const TaskItem = require("../models/task-item-model");

const getTasks = async (req, res, next) => {
  const tasks = await Task.findAll()
  const consolidatedTasks = []

  for (let task of tasks) {
    const taskItemRes = await TaskItem.findAll({
      where: {
        taskId: task.id
      }
    })
    consolidatedTasks.push({
      taskId: task.dataValues?.id,
      taskItems: taskItemRes
    })
  }
  console.log("🚀 ~ file: task-controller.js:7 ~ getTasks ~ consolidatedTasks:", consolidatedTasks);
  res.render("users/task", {
    tasks,
    docTitle: "Tasks",
    path: "/task",
  });
};

const postAddTask = async (req, res, next) => {
  const {
    body: {
      task_id,
      work_order_user_id,
      work_order_lookup_id,
      work_order_dispatch_count,
    },
  } = req;
  try {
    const userId = work_order_user_id;
    const workorderlookupId = work_order_lookup_id;
    const workOrderDispatchCount = work_order_dispatch_count;
    const taskId = task_id
  
    if (taskId.trim() === '') {
      const taskResponse = await Task.create({
        userId,
      });
      await TaskItem.create({
        taskId: taskResponse?.dataValues?.id,
        userId,
        workorderlookupId,
        workOrderDispatchCount,
      });
    } else {
      await TaskItem.create({
        taskId,
        userId,
        workorderlookupId,
        workOrderDispatchCount,
      });
    }
    res.redirect('/task')
  } catch (e) {
    console.log("🚀 ~ file: task-controller.js:49 ~ postAddTask ~ e:", e);
    res.redirect('/task')
  }
  
};

module.exports = {
  getTasks,
  postAddTask,
};
