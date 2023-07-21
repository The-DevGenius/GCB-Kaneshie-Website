<?php
  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'davidayim01@gmail.com';

  if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
  } else {
    die('Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  // Sanitize user input
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  $contact->to = $receiving_email_address;
  $contact->from_name = $name;
  $contact->from_email = $email;
  $contact->subject = $subject;

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  $contact->smtp = array(
    'host' => 'ssl://davidayim01.gmail.com',
    'username' => 'davidayim01@gmail.com',
    'password' => 'Obuobi2002!',
    'port' => '465'
  );
  
  // Enable error reporting and handling
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  try {
    $contact->add_message($name, 'From');
    $contact->add_message($email, 'Email');
    $contact->add_message($message, 'Message', 10);
    echo $contact->send();
  } catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
  }
?>
