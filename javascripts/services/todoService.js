todo.factory('todoService', function() {
  var _items = [
    { text: "Get groceries from the store",
                    dueDate: new Date(),
                    completed: false },
    { text: "Get kittens from the store",
                    dueDate: new Date(),
                    completed: false },
    { text: "Get happiness from the store",
                    dueDate: new Date(),
                    completed: false }
  ];

  var getItems = function getItems() {
    return _items;
  };

  var createTodo = function createTodo(item) {
    var newItem = {
      text: item.text,
      dueDate: item.dueDate,
      completed: false
    };
    _items.push(newItem);
    return _items;
  };

  var deleteTodo = function deleteTodo(index) {
    _items.splice(index, 1);
  };

  var deleteCompleted = function deleteCompleted() {
    _items = _items.filter(function(item) {
      return !item.completed;
    });
  };

  return {
    createTodo: createTodo,
    getItems: getItems,
    deleteTodo: deleteTodo,
    deleteCompleted: deleteCompleted,
  };
});
