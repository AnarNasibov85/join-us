$(document).ready(function () {
    // Show Join Us Modal
    $("#joinButton").click(function () {
        // Get values from inputs
        var email = $("#email").val();
        var message = $("#message").val();

        // Log values to console
        console.log('Email:', email);
        console.log('Message:', message);

        // Reset inputs
        $("#email").val('');
        $("#message").val('');

        // Hide Join Us Modal
        $("#joinUsModal").modal('hide');
    });
});
