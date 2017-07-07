$(function () {
    var btn = $('button');
    var findCls = $('.contact_field.gfield_contains_required');
    var textareaOne = findCls.find('textarea').eq(0);
    var inputOne = findCls.find('input').eq(0);
    var inputTwo = findCls.find('input').eq(1);

    global(inputOne, inputTwo, textareaOne);
    global(inputTwo, inputOne, textareaOne);
    global(textareaOne, inputOne, inputTwo);

    function global(elem, fieldOne, fieldTwo) {
        elem.on('keyup', function () {
            checkFields(elem, fieldOne, fieldTwo);
        });
        elem.on('blur', function () {
            checkFields(elem, fieldOne, fieldTwo);
        });
    }

    function checkFields(elem, fieldOne, fieldTwo) {
        var fieldsOneValue = $(fieldOne).val();
        var fieldsTwoValue = $(fieldTwo).val();

        if (fieldsOneValue === '' || fieldsTwoValue === '' || elem.val() === '') {
            btn.removeClass('notEmpty');
        }
        else {
            btn.addClass('notEmpty');
        }
    }


    $(window).on('load', checkNotEmpty());

    function checkNotEmpty() {
        var li = $('.contact_field');
        var inputs = li.find('input');
        var tArea = li.find('textarea').eq(0);

        var inpArr = [].slice.call(inputs);

        inpArr.forEach(function (elem) {
            if ($(elem).val() !== '') {
                notEmpty(elem);
            }
        });
        if ($(tArea).val() !== '') {
            notEmpty(tArea);
        }


        function notEmpty(objElem) {
            $(objElem).closest('li').find('label').addClass('not_empty');
        }

    }

});

