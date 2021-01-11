$('#myList a[href="satu"]').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
});
$('#myList a[href="dua"]').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
});
$('#myList a[href="tiga"]').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
});
$('#myList a[href="empat"]').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
});
$('#post').click(function() {
  // get content
  var message = $('#message').val();
  // set content
  $('#getmessage').text(message);
  });