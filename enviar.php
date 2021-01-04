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
$headers = "From: webmaster@speedcleanperu.com\r\n";
$headers .= "X-Mailer: PHP/".phpversion();
$headers .= "Mime-Version: 1.0 \r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

// compose message
$message = '<html>';
$message .= '<head><title>Email con HTML</title></head>';
$message .= '<body><h1>Petición de servicio</h1>';
$message .= '<div style="width:100%, text-align:center; margin-bottom: 25px; margin-left: 40px">';
$message .= "<img style='height: 150px; widht: auto; margin: auto' src='http://panda.sempeperusac.com/assets/img/logo.png'/>";
$message .= "</div><br>";
$message .= "<table><thead><th colspan='2' style='font-size:18px'>Datos</th></thead><tbody>";
$message .= "<tr><td style='width:100px;padding-right: 10px; text-align: right'>Nombre</td><td>$persona</td></tr>";
$message .= "<tr><td style='width:100px;padding-right: 10px; text-align: right'>Correo</td><td>$email</td></tr>";
$message .= "<tr><td style='width:100px;padding-right: 10px; text-align: right'>Celular</td><td>$celular</td></tr>";
$message .= "<tr><td style='width:100px;padding-right: 10px; text-align: right'>Servicio</td><td>$servicio</td></tr>";
$message .= "<tr><td style='width:100px;padding-right: 10px; text-align: right'>Direccion</td><td>$direccion</td></tr>";
$message .= "<tr><td style='width:100px;padding-right: 10px; text-align: right'>Fecha de reserva</td><td>$fecha</td></tr>";
$message .= "</tbody></table><hr><small>Mensaje enviado desde la web</small>";
$message .= '</body>';
$message .= '</html>';

// send email
$result = mail($to, $subject, $message, $headers);

if ($result == true) {
  echo "true";
} else {
  echo "false";
}
?>