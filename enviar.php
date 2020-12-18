<?php
$persona = $_POST["cwPersona"];
$email = $_POST["cwEmail"];
$celular = $_POST["cwCelular"];
$servicio = $_POST["cwServicio"];
$direccion = $_POST["cwDireccion"];
$fecha = $_POST["cwFecha"];

$to = "eliud16pc@hotmail.com";
$subject = "Mensaje Enviado desde la WEB";

// compose headers
$headers = "From: webmaster@example.com\r\n";
$headers .= "X-Mailer: PHP/".phpversion();

// compose message
$message = "Petición de servicio";
$message .= "Nombre: $persona";
$message .= "Correo: $email";
$message .= "Celular: $celular";
$message .= "Servicio: $servicio";
$message .= "Direccion: $direccion";
$message .= "Fecha de reserva: $fecha";

// send email
mail($to, $subject, $message, $headers);

echo "true"
?>