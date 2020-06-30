<?php
header("Content-type: application/json; charset=utf-8");
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$city = $_POST['city'];
$country = $_POST['country'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["video"]["name"]);
$ruta= (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

if($name==="" || $lastname ==="" || $email === "" || $video ==="" ){
    echo json_encode('error');
  
}else{

    // Check file size
    if ($_FILES["video"]["size"] < 2500000) {

        if (file_exists($target_file)) {
            echo json_encode("Sorry, file already exists.");
            $uploadOk = 0;
          }else{

                if (move_uploaded_file($_FILES["video"]["tmp_name"], $target_file)) {
                 echo json_encode("Thanks, your video file and data was sent successfully");


                     // mando el email
    $email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
    // After sanitization Validation is performed
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    
    $subject = $nombre;
    // To send HTML mail, the Content-type header must be set.
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .=  'Content-Type: text/html; charset=utf-8' . "\r\n";
    //$headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' . "\r\n";
    $headers .= 'From:' . $email. "\r\n"; // Sender's Email
    $headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
    $template = '<div style="padding:50px; color:#000000;">Hi ' . $nombre . ',<br/>'
    . '<br/>Contact from web site.<br/><br/>'
    . 'Nombre: ' . $name . '<br/>'
    . 'Lastname: ' . $lastname . '<br/>'
    . 'Email: ' . $email . '<br/>'
    . 'Phone: ' . $phone . '<br/>'
    . 'City: ' . $city . '<br/>'
    . 'Contry: ' . $country . '<br/>'
    . 'Message: ' . $message . '<br/>'
    . 'Video url: ' . $ruta."/".$target_file . '<br/>'
    . '<br/>'
    . '  .</div>';
    $sendmessage = "<div style=\"background-color:#ffffff; color:#cccccc;\">" . $template . "</div>";
    // Message lines should not exceed 70 characters (PHP rule), so wrap it.
    $sendmessage = wordwrap($sendmessage, 70);
    // Send mail by PHP Mail Function.
    mail("claudiomonzoni@hotmail.com", $subject, $sendmessage, $headers);
    echo json_decode('email:"enviado"');
    
    } else {
    //echo json_encode('email_invalido');
    }

    
                } else {
                echo json_encode("Error, please try again.");
                }
          }
 
    }else{
        echo json_encode("Sorry, your file is too large");
        $uploadOk = 0;
    }

}
?>
