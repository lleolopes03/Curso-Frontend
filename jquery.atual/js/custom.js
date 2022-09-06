//jQuery(function($){
    /*$(this).hide()-hides the current element
    $("p").hide()-hides all the p element
    $(".test").hide()-hides all elements with class="test"
    $("#test").hide()-hides all the elemnts with id="test"
    compostos:$('h4,h6')
    $('div h4') */
//})
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
    //configuração de produtos
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    $('.featured-item:first h4').append('<span class="badge bg-success">Novo</span> ');
    $("strong").css('color','red');
    
  });

  $('.featured-item a').click(function(event){
    event.preventDefault();
    alert('Produto esgotado');
  });
  $('.featured-item:first').mouseenter(function(){
    $('#toast-Notice').show();

  });
  $('.toast-header button').click(function(){
    $('#toast-Notice').hide();

  });