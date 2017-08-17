<?php

// Your email address goes here
$youremail = "jermobee@icloud.com";

$message = $_REQUEST['message'] ;
$name = $_REQUEST['name'] ;
$email = $_REQUEST['email'] ;

$headers = "From: $email";

if($message == '') {header( "Location: message-error.html");}
else if($name == '') {header( "Location: message-error.html");}
else if($email == '') {header( "Location: message-error.html");}

else {

$content = "Hello there! This is a message from your website's contact form.\r\n\r\n\r\nName: $name\r\n\r\nE-mail: $email\r\n\r\nMessage: $message\r\n\r\n";

$send = mail($youremail, 'Message from the website', $content, $headers);

if($send) {
	header( "Location: message-sent.html" );}
	else
	{ header( "Location: message-error.html" ); }
}

?>