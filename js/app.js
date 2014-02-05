var items, item;

$(document).ready(function(){

  var titleInput = ".itemName";
  var check = $("input[type='checkbox']");

  // click on input selects all text

  $(document).on('click', titleInput, function(){
    var input = this;
    input.focus();
    input.setSelectionRange(0,999); 
  });

  // toggle empty list text and select all checkbox

  function isEmpty() {
    if ("ol li" > 0) {
      $(".empty").hide();
      $(".checkAll").show();
    } else {
      $(".empty").show();
      $(".checkAll").hide();
    }
  }

  $(document).ready(function() {    
     $("input").bind('blur keyup',function(e) {  
          if (e.type == 'blur' || e.keyCode == '13')  {}
          // do your stuff here  
     });  
  })


  // adds item html
  
  function addItem() {
    $('.items').prepend(
      "<li class='item'>" +
        "<div class='checkbox'>" +
          "<input type='checkbox' id='item-" + 1 + "'>" + 
          "<label for='item-" + 1 + "'></label>" + 
        "</div>" + 
        "<input class='itemName' type='text' value=''>" + 
      "</li>").find("input").focus();
  }

  // on click add item 

  $('.add').click(function() {
    addItem();
    //isEmpty();
  });

  // add fastclick for mobile use

  $(function() {
    FastClick.attach(document.body);
  });
});

