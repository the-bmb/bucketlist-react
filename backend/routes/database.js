const data = {
  task: []
};

module.exports = {
  task: {
    list: () => {
      return data.task;
    },

    add: (name, completed = false) => {
      data.task.push({ name, completed });
    },

    set: (index, name, completed) => {
      data.task[index].name = name;
      data.task[index].completed = completed;
    },

    delete: index => {
      data.task.splice(index, 1);
    }
  }
};
