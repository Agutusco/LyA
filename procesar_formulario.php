<?php
// Obtener los datos enviados desde JavaScript
// $datos = json_decode(file_get_contents('php://input'), true);
// $datos = json_decode(file_get_contents('php://input'), true);
//  if ($datos === null) { http_response_code(400);
//       echo "Error al procesar los datos enviados."; exit; }
var_dump($datos)






// Obtener los valores del formulario
$nombre = $datos['nombre'];
$tel = $datos['tel'];
$celular = $datos['celular'];
$email = $datos['email'];
$mensaje = $datos['mensaje'];

// Dirección de correo electrónico de destino (tu correo electrónico)
$destinatario = "agutusco@gmail.com";

// Asunto del correo electrónico
$asunto = "Nuevo mensaje de tu formulario web";

// Cuerpo del correo electrónico
$cuerpo = "Nombre: $nombre\n";
$cuerpo .= "Teléfono: $tel\n";
$cuerpo .= "Celular: $celular\n";
$cuerpo .= "Correo electrónico: $email\n";
$cuerpo .= "Mensaje:\n$mensaje";

// Cabeceras del correo electrónico
$cabeceras = "From: $email\r\n";
$cabeceras .= "Reply-To: $email\r\n";
$cabeceras .= "X-Mailer: PHP/" . phpversion();

// Enviar el correo electrónico
if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
    echo "¡El mensaje se ha enviado correctamente!";
} else {
    echo "Ha ocurrido un error al enviar el mensaje.";
}
?>