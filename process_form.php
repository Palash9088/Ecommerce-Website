<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create an email message
    $to = "your@email.com"; // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Message:\n$message";

    // Send the email
    $headers = "From: $email";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Thank you for your submission. We will get back to you soon!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
} else {
    // If the script is accessed directly, redirect to the form page
    header("Location: your_form_page.html"); // Replace with the actual filename
    exit;
}
?>
