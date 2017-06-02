$(function() {
  $.getJSON('api', updatecomments);

  $('.comments-form').submit(function(e) {
    e.preventDefault();
    $.post('api', {
      name: $('#comments-form-name').val(),
      title: $('#comments-form-title').val(),
      message: $('#comments-form-message').val()
    }, updatecomments);
  });

  $('.comments-messages').on('click', function(e) {
      if (e.target.className == 'glyphicon glyphicon-remove') {
        $.ajax({
          url: 'api/' + e.target.id,
          type: 'DELETE',
          success: updatecomments
        });
      }
  });

  function updatecomments(data) {
   var output = '';
   $.each(data,function(key, item) {
     output += '     <div class="comments-item item-list media-list">';
     output += '     <div class="comments-item media">';
     output += '     <div class="media-left"><button class="comments-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
     output += '     <div class="comments-info media-body">';
     output += '     <div class="comments-head">';
     output += '     <div class="comments-title">' + item.title + ' <small class="comments-name label label-info">' + item.name + '</small></div>';
     output += '     </div>';
     output += '     <div class="comments-message">' + item.message + '</div>';
     output += '     </div>';
     output += '     </div>';
     output += '     </div>';
   });
   $('.comments-messages').html(output);
  }
});
