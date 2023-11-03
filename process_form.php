<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "wesledavid1@gmail.com"; // Replace with your email address
    $subject = "Form my Portfolio from $name";
    $headers = "From: $email";
    $messageBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Form submitted successfully. Thank you!";
    } else {
        echo "Form submission failed. Please try again.";
    }
}
?>
