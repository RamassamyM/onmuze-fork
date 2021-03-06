//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require jquery-fileupload/basic
//= require cloudinary/jquery.cloudinary
//= require attachinary
//= require bootstrap-datepicker
//= require moment
//= require bootstrap-datetimepicker
//= require_tree .

$(document).ready(function() {
  $('#search-alert').hide();
  $('#btn-home').click(function(e) {
    if ($('#performance_address').val() === '' || $('#performance_date').val() === '' || $('#performance_event_type').val() === '') {
      $('#search-alert').show(500);
      e.preventDefault();
    } else {
      $('#search-alert').hide(500);
      $(this).unbind('click');
    }
  });
});
