<?php
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'temp_humdty_data');

//get connection
$db = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
$query="SELECT date, humidity, temperature FROM dht11";

$result = mysqli_query($db, $query);

$ids = array();
$temps = array();
$humis = array();

while($data = mysqli_fetch_assoc($result))
{
    $ids[] = $data['date'];
	$temps[] = (float)$data['temperature'];
	$humis[] = (float)$data['humidity'];
}
$data=[$ids,$temps,$humis];
print json_encode($data);
?>