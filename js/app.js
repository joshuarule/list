var items, item, name;

$(document).ready(function(){

  $(function() {
    FastClick.attach(document.body);
  });

  items = [];

  name = $("#itemName");

  // click on input select all

  $('.item input[type="text"]').click(function(){
    var input = this;
    input.focus();
    input.setSelectionRange(0,999); 
  });

  // toggle empty list text

  function isEmpty() {
    if (items.length > 0) {
      $(".empty").hide();
      $(".checkAll").show();
    } else {
      $(".empty").show();
      $(".checkAll").hide();
    }
  }
  

  // adds item
  
  function addItem() {
    $('.items').prepend(
      "<li class='item'>" +
        "<div class='checkbox'>" +
          "<input type='checkbox' id='item-" + items.length + "'>" + 
          "<label for='item-" + items.length + "'></label>" + 
        "</div>" + 
        "<input id='itemName' type='text' value='item " + items.length + "'>" + 
      "</li>");

    return {name: "", disable: true};
  }

  function deleteItem() {
    // var index = items.indexOf(itemName.val()) // grab the current index by name
    // items.splice(index, 1) // remove that index
  }

  // on click add item 

  $('.add').click(function() {
    items.push(addItem());
    isEmpty();
  });

  // on change update

  $("#itemName").change(function(){
    alert("change");
  });

});

// disable item

  // move to bottom

// activate item

// update itemName

// if name has no value then deleteItem

