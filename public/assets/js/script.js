$(document).ready(function() {

    $(".devourBtn").on("click", function(event){
        const id = $(this).data("id");

        console.log ("click");
            // Send the PUT request.
        $.ajax("/api/hamburger/" + id, {
            type: "PUT"
        }).then(function() {
                console.log("changed to DEVOURED");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });


}); // Ending of Ready Function