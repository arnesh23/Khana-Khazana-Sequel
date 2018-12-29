$(function() {
$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("fjdsof");

    var khana = {
      khana: $("#khana").val().trim(),
    };
    console.log(khana);

    // Send the POST request.
    $.ajax("/api/khana", {
      type: "POST",
      data: khana
    }).then(
      function() {
        console.log("New khana created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    
    // Send the DELETE request.
    $.ajax("/api/khana/" + id, {
      type: "PUT",
    }).then(
      function() {
        console.log("deleted khana", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".savor").on("click", function(event) {
    var id = $(this).data("id");
    console.log("SAVOR CLICKED!");
    
    // Send the DELETE request.
    $.ajax("/api/khana/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted khana", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});