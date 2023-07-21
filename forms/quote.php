<?php
require 'vendor/autoload.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer();

// ... Other PHPMailer configuration settings ...

$mail->SMTPDebug = SMTP::DEBUG_SERVER; // Enable verbose debug output
$mail->Debugoutput = 'html'; // Display debug output in HTML format

// ... Rest of your PHPMailer code ...




$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->IsSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'bellamerisol@gmail.com';
$mail->Password = 'Aristocrat1!'; // Replace 'YourGmailPassword' with your Gmail account password
$mail->SMTPSecure = 'tls';

// Retrieve form data from $_POST array
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail->setFrom($email, $name);
$mail->addAddress('ayimobuobi@gmail.com');

$mail->Subject = 'New Message from Website';
$mail->Body = "You have received a new message from your website contact form.\n\n"
    . "Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

if (!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
