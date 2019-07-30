<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  
  if($params->nombre===null || $params->categoria===null || $params->descripcion===null ){
    $response = array(
      'resultado'=>'OK',
      'mensaje'=>'favor de llenar campos obligatorios'
      );
  }
  else{
      // REALIZA LA QUERY A LA DB
try{
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conn = conexion(); // CREA LA CONEXION

mysqli_query($conn, "UPDATE productos SET f_id_categoria='$params->categoria', nombre='$params->nombre',
 descripcion='$params->descripcion' where id_prod = '$params->id'");    



$response = array(
'resultado'=>'OK',
'mensaje'=>'Se actualizaron correctamente los datos del producto'
);
}
catch(exeption $e){
  $response = array(
      'resultado'=>'error',
      'mensaje'=>'error'
      );
}

  }

  header('Content-Type: application/json');
echo json_encode($response); // MUESTRA EL JSON GENERADO
?>