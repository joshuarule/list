var items, item;

$(document).ready(function(){

  items = [];
  var titleInput = ".itemName";

  // item constructor

  function item() {
    this.id = items.length; // failed attempt to make unique id# 
    this.title = '';
    this.active = true;
  };

  // click on input selects all text

  $(document).on('click', titleInput, function(){
    var input = this;
    input.focus();
    input.setSelectionRange(0,999); 
  });

  // toggle empty list text and select all checkbox

  function isEmpty() {
    if (items.length > 0) {
      $(".empty").hide();
      $(".checkAll").show();
    } else {
      $(".empty").show();
      $(".checkAll").hide();
    }
  }

  // on change update item

  $(document).on('change', titleInput, function(){

    id = this.getAttribute("id");
    parts = id.split('-');

    items[parts[1]-1].title = this.value;
    console.log(items);

  });

  // adds item html
  
  function addItem() {
    $('.items').prepend(
      "<li class='item'>" +
        "<div class='checkbox'>" +
          "<input type='checkbox' id='item-" + items.length + "'>" + 
          "<label for='item-" + items.length + "'></label>" + 
        "</div>" + 
        "<input class='itemName' id ='input-" + items.length + "' type='text' value='item " + items.length + "'>" + 
      "</li>");
  }

  // on click add item 

  $('.add').click(function() {
    var x = new item();
    items.push(x); // puts item into items[]
    addItem();
    isEmpty();
  });

  // add fastclick for mobile use

  $(function() {
    FastClick.attach(document.body);
  });
});

// disable item

  // move to bottom

// activate item

// update itemName

// if name has no value then deleteItem

