$(document).ready(function() {

    $(".devourBtn").on("click", function(event){
        const id = $(this).data("id");

        console.log ("click");
            // Send the PUT request.
        $.ajax("/api/hamburger/" + id, {
            type: "PUT"
        }).then(function() {

                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

    $(".deleteBtn").on("click", function(event){
        const id = $(this).data("id");

        console.log ("click");
            // Send the PUT request.
        $.ajax("/api/hamburger/" + id, {
            type: "DELETE"
        }).then(function() {

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let burgerName = {
            name: $("#burgerName").val().trim()
        };                               

        // Send the POST request.
        $.ajax("/api/hamburger", {
        type: "POST",
        data: burgerName
        }).then(
        function() {
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

}); // Ending of Ready Function