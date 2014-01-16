var items, item, name;

$(document).ready(function(){

  items = [];
  titleInput = ".itemName";

  // item constructor

  function item(title) {
    this.title = title;
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

    // var index = Number($(this).attr("id")); // grabs id val for index
    // items[index].title = $(this).val(); // sets the title of the current item
    // console.log(index)
  });

  // adds item html
  
  function addItem() {
    $('.items').prepend(
      "<li class='item'>" +
        "<div class='checkbox'>" +
          "<input type='checkbox' id='item-" + items.length + "'>" + 
          "<label for='item-" + items.length + "'></label>" + 
        "</div>" + 
        "<input class='itemName' type='text' value='item " + items.length + "'>" + 
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

