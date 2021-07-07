<?php
$firstName = $_POST['validation-firstname'];
$lastName = $_POST['validation-lastname'];
$email = $_POST['validation-email'];
$phone = $_POST['validation-phone'];
$message = $_POST['validation-message'];
$body = "FirstName: $firstName\n LastName: $lastName\n Mobile: $phone\n E-Mail: $email\n Message: $message";
$recipient = $email;
$subject = "Quote";
$headers = "Admin";
if (mail($recipient, $subject, $body, $headers)){
    print "<p>Message send successfully. Check your inbox.</p>";
}
else{
    print "<p>Ah! Please try again</p>";
}
?>
