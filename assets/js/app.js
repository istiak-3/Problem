$(document).ready(function () {
    /** --Header Part Start -- */

    /** fixed-header padding offset ----(Note: To change after next section is done)*/
    // $('#afterHeadingSection').css({
        // 'padding-top': $('header').outerHeight(true) + 100
    // })


    $(window).on('scroll', function () {
        event.stopPropagation();

        /**header shrink */
        if ($(this).scrollTop() > 80) {
            $('#bottom-header ul.page_list li.categories, #bottom-header ul.page_list > li').css({
                'padding-top': 4,
                'padding-bottom': 4
            })

            $('#top-header').slideUp(300, 'linear')
        }
        else {
            $('#bottom-header ul.page_list li.categories, #bottom-header ul.page_list > li').css({
                'padding': ''
            })
            $('#top-header').fadeIn(100)
        }
    });
    /** search bar focus */
    $('.search_input').on({
        'focus': function () {
            $('.search_input').css({
                'padding-left': 20
            })
            $('.search_icon').hide()
        },
        'blur': function () {
            $('.search_input').css({
                'padding-left': ''
            })
            $('.search_icon').show() 
        }
    })

    /** bottom header category-list toggle */
    $('#bottom-header li.categories').hover(function(){
        $('#bottom-header ul.category_list').stop(true, true).slideToggle(300)
    })
    /** --Header Part End -- */

})
