<?php

$ch = curl_init(); 
curl_setopt($ch, CURLOPT_URL, "antibots.json"); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
$string = curl_exec($ch); 
curl_close($ch);
$decode_data = json_decode($string);
if (is_array($decode_data) || is_object($decode_data))
    foreach($decode_data->tite as $mydata){
        foreach($mydata->instances as $values) {
            $try = $_SERVER['HTTP_USER_AGENT'];
            if($try == strpos($_SERVER['HTTP_USER_AGENT'],"$values")){
                header("HTTP/1.0 400 Bad Request");
                die("<html lang='en'><head><title>HTTP Status 400 – Bad Request</title><style type='text/css'>body {font-family: Tahoma, Arial, sans-serif;}h1,h2,h3,b{color: white;background-color: #525D76;}h1 {font-size: 22px;}h2{font-size: 16px;}h3 {font-size: 14px;}p {font-size: 12px;}a {color: black;}.line {height: 1px;background-color: #525D76;border: none;}</style></head><body><h1>HTTP Status 400 – Bad Request</h1> </body></html>");  
                exit();            
            }
        }
    }
?>