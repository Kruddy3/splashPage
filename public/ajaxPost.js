$(() => {
  let errNotif;
  $('#zuccessfulSignUp').hide()
  $('button.button').click(() => {
    console.log(document.getElementsByClassName('input')[0].value),
    console.log(document.getElementsByClassName('input')[1].value),
    userObject = { name: document.getElementsByClassName('input')[0].value, email: document.getElementsByClassName('input')[1].value };
    userJson = JSON.stringify(userObject);

    $.ajax({
      url: '/users',
      type: 'POST',
      data: userJson,
      contentType: 'application/json; charset=utf-8',
      success(response) {
        console.log(response);
        if (response == 'zuccess') {
          console.log('check working');
          $(':input')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');
          $('#signUp').hide()
          $('#errorIdLoc').hide()
          $('#zuccessfulSignUp').show()
        } else {
          $('#femail').removeClass('input').addClass('input is-danger');
          const res = response[0];
          // $(".errorMsgLocation").click(function(){$("#cardBackground").show()})
          $('.errorMsgLocation').append($(`<div class="notification is-danger">${res}<button class="delete"></button></div>`)).click(function (test) {
            $(this).children('div').remove();
          });
        }
      },
    });
  });
});
