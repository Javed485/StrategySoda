<?php
$conn = mysqli_connect('localhost', 'root', '', 'travel_db');

if (isset($_POST['send'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $location = $_POST['location'];
    $guests = $_POST['guests'];
    $arrivals = $_POST['arrivals'];
    $leaving = $_POST['leaving'];

    $request = "INSERT INTO book_form(name, email, phone, address, location, guests, arrivals, leaving) VALUES('$name','$email','$phone','$address','$location','$guests','$arrivals','$leaving') ";
    mysqli_query($conn, $request);

    if ($request) {
        echo "<script>
                    alert('Your Form Submitted.');
                    window.location.href='book.php';
                </script>";
    } else {
        echo 'something went wrong please try again!';
    }
}
?>

<script src="js/jquery-3.6.0.min.js"></script>