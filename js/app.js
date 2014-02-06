var items, item;

$(document).ready(function(){



  var titleInput = ".itemName";
  // var check = $("input[type='checkbox']");

  var itemIterator = 0;

  // click on input selects all text

  $(".items").on('click', titleInput, function(){
    var input = this;
    input.focus();
    input.setSelectionRange(0,999);
  });

  // item loses focus on enter or esc

  $(".items").on('keydown', titleInput, function(e){
    if (e.keyCode == 13 || e.keyCode == 27) {
      $(this).blur();
    };
  });

  // remove item if title value is 0

  $(".items").on('blur', '.itemName', function(){
    // console.log($(this).val() + " blur");
    if ($(this).val().length < 1) {
      $(this).closest(".item").remove();
    };
    isEmpty();
  });

  // check all

  $('.controls').on('click', '.checkAll label', function(){
    if ($("#all").is(':checked')) {
      console.log("uncheck");
      $('.inputCheck').attr('checked', false);
      $('.inputCheck').closest('.item').toggleClass('disabled');
      toggleRemove();
    } else {
      console.log("check");
      $('.inputCheck').attr('checked', true);
      $('.inputCheck').closest('.item').toggleClass('disabled');
      toggleRemove();
    }
  })

  //checks to see if list is empty

  function isEmpty() {
    if ($('ul li').length > 0) { 
      $(".empty").hide();
      $(".checkAll").show();
    } else {
      $(".empty").show();
      $(".checkAll").hide();
    }
  }

  // checks to see if any items are able to be removed

  function toggleRemove() {
    if ($(".disabled").length) {
      $(".remove").show();
      console.log($(".items input:checkbox:checked").length + "show");
    } else {
      $(".remove").hide();
      console.log($(".items input:checkbox:checked").length + "hide");
    }
  }

  // adds item html
  
  function addItem() {
    var item =  "<li class='item'>" +
                  "<div class='checkbox'>" +
                    "<input class='inputCheck' type='checkbox' id='item-" + itemIterator + "'>" + 
                    "<label class='inputLabel' for='item-" + itemIterator + "'></label>" + 
                  "</div>" + 
                  "<input class='itemName' id='itemName-" + itemIterator + "' type='text' value=''>" + 
                "</li>";

    $('.items').prepend(item);

    //focuses the new item
    $('#itemName-' + itemIterator).focus();
    itemIterator += 1;
  }

  // disable item on click of checkbox

  $(".items").on('click', '.inputLabel', function(){
    $(this).closest('.item').toggleClass('disabled');
    toggleRemove();
  })

  // remove .disabled items on click

  $(".remove").on('click', function(e){
    $('.disabled').remove();
    isEmpty();
    toggleRemove();
  });

  // on click add item 

  $('.add').click(function() {
    addItem();
    isEmpty();
  });

  // add fastclick for mobile use

  $(function() {
    FastClick.attach(document.body);
  });
});

