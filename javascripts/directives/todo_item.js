todo.directive('todoItem', function() {
  return {
    templateUrl: 'javascripts/directives/todo_item.html',
    restrict: 'A',
    scope: {
      item: '=',
      deleteItem: '&'
    }
  }
});
