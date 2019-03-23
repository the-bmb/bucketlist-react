function api(url, opts) {
  return fetch(url, opts)
    .then(data => data.json())
    .then(data => data.data);
}

export default {
  fetchItems: function() {
    return api("/items");
  },

  addItem: function(title) {
    return api("/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title })
    });
  },

  updateItem: function(index, item) {
    return api(`/items/${index}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    });
  },

  deleteItem: function(index) {
    return api(`/items/${index}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
  }
};
