const data = {
  items: []
};

module.exports = {
  items: {
    list: () => {
      return data.items;
    },

    add: (title, completed = false) => {
      data.items.push({ title, completed });
    },

    set: (index, title, completed) => {
      data.items[index].title = title;
      data.items[index].completed = completed;
    },

    delete: index => {
      data.items.splice(index, 1);
    }
  }
};
