<?php
$nombres = $_POST["cw_nombres"];
$apellidos = $_POST["cw_apellidos"];
$correo = $_POST["cw_correo"];
$telefono = $_POST["cw_telefono"];
$mensaje = $_POST["cw_mensaje"];

$to = "eliud16pc@hotmail.com";
$subject = "Mensaje Enviado desde la WEB";

// compose headers
$headers = "From: webmaster@example.com\r\n";
$headers .= "X-Mailer: PHP/".phpversion();

// compose message
$message = "Petición de servicio";
$message .= "nombres: $nombres";
$message .= "apellidos: $apellidos";
$message .= "correo: $correo";
$message .= "telefono: $telefono";
$message .= "mensaje: $mensaje";

// send email
mail($to, $subject, $message, $headers);

echo "true"
?>