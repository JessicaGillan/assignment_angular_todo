todo.controller('todoCtrl',
  ['$scope', '$window',
    function($scope, $window) {
      $scope.items = [
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
      $scope.hideCompleted = false;

      $scope.createTodo = function() {
        var newItem = {
          text: $scope.item.text,
          dueDate: $scope.item.dueDate,
          completed: false
        };
        $scope.items.push(newItem);
        $scope.item = {};
      };

      $scope.deleteTodo = function(index) {
        $scope.items.splice(index, 1);
      };

      $scope.deleteCompleted = function() {
        $scope.items = $scope.items.filter(function(item) {
          return !item.completed;
        });
      };
      $scope.toggleCompleted = function() {
        $scope.hideCompleted = !$scope.hideCompleted;
      };
    }
  ]
);
