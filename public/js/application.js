$(document).ready(function() {

  loadIndexPopular();
  searchByLocEvent();
  searchByTagEvent();

});


var loadIndexPopular = function() {

  $.ajax({
    url: '/media/popular',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(data) {
    data.forEach(function(media) {

        $('#popular').append('<img src='+media.images.standard_resolution.url+'>')
    });
    $('#popular img').css({'display': 'block', 'margin': '0 auto', 'margin-bottom': '25px'});
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
};


var searchByLocEvent = function() {

  $('#media_search').on('click', function(event) {
    event.preventDefault();

    var lat = $('.search').serializeArray()[0].value;
    var lng = $('.search').serializeArray()[1].value;

    if (($('.search').serializeArray()[2].value) !== undefined) {
      var label = $('.search').serializeArray()[2].value;
    };

    $.ajax({
      url: '/media/search',
      type: 'GET',
      dataType: 'json',
      data: {latitude: lat, longitude: lng, name: label}
    })
    .done(function(data) {
      data.forEach(function(media) {
        $('#index_search').append('<div><img src='+media.images.standard_resolution.url+'>')
      });
      $('#index_search img').css({'display': 'block', 'margin': '0 auto', 'margin-bottom': '25px'});
      $('.search').reset();
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });

};

var searchByTagEvent = function() {

  $('#tag_search').on('click', function(event) {
    event.preventDefault();

    var tag = $('.search').serializeArray()[3].value;

    $.ajax({
      url: '/media/tags',
      type: 'GET',
      dataType: 'json',
      data: {hashtag: tag}
    })
    .done(function(data) {
      console.log(data);
      data.forEach(function(media) {
        $('#index_search').append('<div><img src='+media.images.standard_resolution.url+'>')

      });
      $('#index_search img').css({'display': 'block', 'margin': '0 auto', 'margin-bottom': '25px'});

      $('.input_field').reset();
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });

};
