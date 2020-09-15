
// Create an event listener for the “start” quiz button & scroll down to first m/c question 
$(function() {
    $('.startQuiz').on('click', function() {
        const scroll = $(this).attr('ss');
        const scrollTo = $('#' + scroll);
        $('html, body').animate({
            scrollTop: scrollTo.offset().top
        }, 'slow');
    })


    $('.nextQuestion').on('click', function() {
        const scroll = $(this).attr('ss');
        const scrollTo = $('#' + scroll);
        $('html, body').animate({
            scrollTop: scrollTo.offset().top
        }, 'slow');
    })

    // hide potential answers 
    $('.questionOneRight').hide();
    $('.questionOneWrong').hide();
    
    // Save information from the checked radio button into variable
    $('input[name=questionOne]').on('click', function() {
        const reveal = $(this);
    // As soon as user clicks radio button, it will determine whether or not the right answer was selected and show. 
        if (reveal.val() == 'correct') {
            $('.questionOneRight').show();
            $('.questionOneWrong').hide();
        }   else if (reveal.val() == 'incorrect') {
                $('.questionOneWrong').show();
                $('.questionOneRight').hide();
        }
    })

    // hide potential answers 
    $('.questionTwoRight').hide();
    $('.questionTwoWrong').hide();

    // Save information from the checked radio button into variable
    $('input[name=questionTwo]').on('click', function() {
        const revealTwo = $(this);
    // As soon as user clicks radio button, it will determine whether or not the right answer was selected and show.
        if (revealTwo.val() == 'correct') {
            $('.questionTwoRight').show();
            $('.questionTwoWrong').hide();
        }   else if (revealTwo.val() == 'incorrect') {
                $('.questionTwoWrong').show();
                $('.questionTwoRight').hide();
        }
    })
    
    // hide potential answers 
    $('.questionThreeRight').hide();
    $('.questionThreeWrong').hide();
    // Save information from the checked radio button into variable
    $('input[name=questionThree]').on('click', function() {
        const revealThree = $(this);
        // As soon as user clicks radio button, it will determine whether or not the right answer was selected and show.
        if (revealThree.val() == 'correct') {
            $('.questionThreeRight').show();
            $('.questionThreeWrong').hide();
        }   else if (revealThree.val() == 'incorrect') {
                $('.questionThreeWrong').show();
                $('.questionThreeRight').hide();
        }
    })

    // hide potential answers 
    $('.questionFourRight').hide();
    $('.questionFourWrong').hide();
    // Save information from the checked radio button into variable
    $('input[name=questionFour]').on('click', function() {
        const revealFour = $(this);
        // As soon as user clicks radio button, it will determine whether or not the right answer was selected and show.
        if (revealFour.val() == 'correct') {
            $('.questionFourRight').show();
            $('.questionFourWrong').hide();
        }   else if (revealFour.val() == 'incorrect') {
                $('.questionFourWrong').show();
                $('.questionFourRight').hide();
        }
    })

    // hide potential answers 
    $('.questionFiveRight').hide();
    $('.questionFiveWrong').hide();
    // Save information from the checked radio button into variable
    $('input[name=questionFive]').on('click', function() {
        const revealFive = $(this);
        // As soon as user clicks radio button, it will determine whether or not the right answer was selected and show.
        if (revealFive.val() == 'correct') {
            $('.questionFiveRight').show();
            $('.questionFiveWrong').hide();
        }   else if (revealFive.val() == 'incorrect') {
                $('.questionFiveWrong').show();
                $('.questionFiveRight').hide();
        }
    })

    
// show the final button for restarting the quiz. Add an event listener similar to the top which will refresh the page and go back to the beginning of the quiz. 
    $('.endQuiz').on('click', function() {
        location.reload(); 
        $('html, body').scrollTop(0);
    });

});