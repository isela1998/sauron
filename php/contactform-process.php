<?php
$error = "";

if (empty($_POST["nombre"])) {
    $error = "El nombre es requerido";
} else {
    $nombre = $_POST["nombre"];
}

if (empty($_POST["wss"])) {
    $error = "El número de Whatsapp es requerido";
} else {
    $whatsApp = $_POST["wss"];
}

$EmailTo = "contacto@saurom.com";
$Subject = "Nueva solicitud de servicio - SAURON SSS";

$Body = "";
$Body .= "Nombre: ";
$Body .= $nombre;
$Body .= "\n";
$Body .= "WhatsApp: ";
$Body .= $whatsApp;
$Body .= "\n";

$success = mail($EmailTo, $Subject, $Body, "From:".$EmailTo);

if ($success && $error == ""){
   echo "success";
}else{
    if($error == ""){
        echo "Ocurrió un error...";
    } else {
        echo $error;
    }
}
?>