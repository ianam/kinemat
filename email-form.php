<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if(!isset($_POST['submit']))
{
    echo "The form needs to be submitted";
}
    $name = $_POST['name'];
    $usr_email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $message = $_POST['message'];

    // Validate against email injection attempts
    if(IsInjected($usr_email))
    {
        echo "Invalid email value";
        exit;
    }

    $email_from = 'sales@kinemat.ca';
    $email_subject = "New message from Kinemat.ca";
    $email_body = "New contact form submission from Kinemat.ca\n".
                    "Name: $name\n".
                    "Email: $usr_email\n".
                    "Phone: $phone\n".
                    "Company: $company\n".
                    "Message: $message\n";

    $to = 'sales@kinemat.ca';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $usr_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    // Validation function
    function IsInjected($str)
    {
        $injections = array('(\n+)',
                    '(\r+)',
                    '(\t+)',
                    '(%0A+)',
                    '(%0D+)',
                    '(%08+)',
                    '(%09+)'
        );
        $inject = join('|', $injections);
        $inject = "/$inject/i";
        if(preg_match($inject,$str))
            {
                return true;
            }
            else
            {
                return false;
            }
    }
?>