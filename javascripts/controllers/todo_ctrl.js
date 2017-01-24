todo.controller('todoCtrl',
  ['$scope', '$window', 'todoService',
    function($scope, $window, todoService) {
      $scope.items = todoService.getItems();
      $scope.hideCompleted = false;

      $scope.createTodo = function() {
        todoService.createTodo($scope.item);
      };

      $scope.deleteTodo = function(index) {
        todoService.deleteTodo(index);
      };

      $scope.deleteCompleted = function() {
        todoService.deleteCompleted();
      };
      $scope.toggleCompleted = function() {
        $scope.hideCompleted = !$scope.hideCompleted;
      };
    }
  ]
);
