<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION
  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "SELECT id_prod as id,f_id_categoria as categoria, nombre, descripcion FROM productos WHERE id_prod=$_GET[id]");
  
  // SI EL USUARIO EXISTE OBTIENE LOS DATOS Y LOS GUARDA EN UN ARRAY
  if ($resultado = mysqli_fetch_array($registros))  
  {
  
  }
  
  $json = json_encode($resultado); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  echo $json; // MUESTRA EL JSON GENERADO
  
  header('Content-Type: application/json');
?>