(function () {
    angular.module("turtleFacts")
        .controller('resultsCtrl', ResultsController);
    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService) {
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.activeQuestion = 0;
        vm.getAnswerClass = function (index) {
            if (index === quizMetrics.correctAnswers[vm.activeQuestion]) {
                return "bg-success";
            }
            if (index === DataService.quizQuestions[vm.activeQuestion].selected) {
                return "bg-danger";
            }
        }
        vm.getAnswerClassImage = function (index) {
            if (index === quizMetrics.correctAnswers[vm.activeQuestion]) {
                return "correctImage";
            }
            if (index === DataService.quizQuestions[vm.activeQuestion].selected) {
                return "wrongImage";
            }
        }

        vm.setActiveQuestion = function (index) {
            vm.activeQuestion = index;
        }
        vm.calculatePercentage = function () {
            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100
        }
        vm.reset = function() {
            quizMetrics.changeState("results", false);
            quizMetrics.numCorrect = 0;
            for(var i = 0; i < DataService.quizQuestions.length; i++) {
                var data = DataService.quizQuestions[i];
                data.selected = null;
                data.correct = null;
            }
        }
    }
})();
