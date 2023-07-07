<?php
if(isset($_POST['submit'])){
    $name=$_POST['fname'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $service=$_POST['service'];
    $message=$_POST['message'];

    $to='javed1857@gmail.com';
    $subject='Form Submission';
    $message="Name: ".$name."\n"."Phone: ".$phone."\n"."Services: ".$service."\n"."Message: ".$message;
    $headers="Form: ".$email;

    if(mail($to, $subject, $message, $headers)){
        echo"<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly.</h1>";
    }
    else{
        echo"Something went wrong!";
    }
}
?>
