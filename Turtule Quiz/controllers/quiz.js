(function() {
    angular.module("turtleFacts")
    .controller("quizCtrl", QuizController);
    
    QuizController.$inject = ['quizMetrics', 'DataService'];
    
    function QuizController(quizMetrics, DataService) {
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.activeQuestion = 0;
        var numQuestionsAnswered = 0;
        
        vm.finaliseAnswers = function() {
            vm.finalise = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState('quiz', false);
            quizMetrics.changeState('results', true);
            console.log('ahihi');
        }
        
        vm.error = false;
        vm.finalise = false;
        vm.selectAnswer = function(index) {
            DataService.quizQuestions[vm.activeQuestion].selected = index;    
        }
        vm.setActiveQuestion = function(index) {
            if(index === undefined){
                var breakOut = false;
                var quizLength = DataService.quizQuestions.length - 1;
                while(breakOut === false){
                    vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
                    if(vm.activeQuestion === 0) {
                        vm.error = true;
                    }
                    if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                        breakOut = true;
                    }   
                }
            } else {
                vm.activeQuestion = index;
            }
        }   
        vm.questionAnswered = function() {
            var quizLength = DataService.quizQuestions.length;
            if(DataService.quizQuestions[vm.activeQuestion].selected !== null) {
                numQuestionsAnswered++;
                if(numQuestionsAnswered >= quizLength) {
                    for(var i = 0; i < quizLength; i++) {
                        if(DataService.quizQuestions[i].selected === null) {
                            setActiveQuestion(i);
                            console.log('ahihi');
                            return;
                        }
                    }  
                    vm.error = false;
                    vm.finalise = true;
                    return;
                }
            }
            vm.setActiveQuestion();
        }
        
    }
})();
