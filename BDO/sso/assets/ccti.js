var SXI = {
disableSubmit : function() {
$('form').submit(function(e) {
if(!($(this).attr('loginForm') =='true')) {
return false; 
}
})
},
enableSXIButtons : function() {
$('input[sxiButton=true]').each(function(e) {
this.disabled = false;
})
}, 
replaceClick : function(replacedElement) {
replacedElement.newonclick = replacedElement.onclick;
replacedElement.onclick = function() {};
},
checkValidation: function(sxiButton) {
if($(sxiButton).attr('validating') == 'true') {
var validator = $(sxiButton.form).validate({
errorPlacement: function(error, element) {
if($(element).next('img').get() == '') {
error.insertAfter(element);
} else {
error.insertAfter($(element).next('img'));
}
}


});
var result = validator.form();
validator.focusInvalid();
$('.sidetip2').hide();
$('.sidetip').hide();
if(!result) {
clearFeedback(sxiButton.form);
return false;
} else {
return true;
}
}
},
getConfirm : function (sxiButton) {
var answer = true;
if($(sxiButton).attr('confirmMessage') != undefined) {
answer = window.confirm($(sxiButton).attr('confirmMessage'));
} 
return answer;
},
createNewClick : function (sxiButton) {
$(sxiButton).click(function() {
if(this.onvalidate == undefined) {
this.onvalidate = function(){return true;}
}
if(SXI.checkValidation(sxiButton)) {
if(this.onvalidate()) {
if(SXI.getConfirm(sxiButton)) {
sxiButton.disabled=true;
sxiButton.newonclick();
} else {
return false;
}
} else {
return false;
}
} else{
if($(sxiButton).attr('validating') == 'false') {
if(this.onvalidate()) {
if(SXI.getConfirm(sxiButton)) {
sxiButton.disabled=true;
sxiButton.newonclick();
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
}
})
},
initializeSXIButtons : function() {
$('input[sxiButton=true]').each(function(e) {
if(this.newonclick == undefined) {
SXI.replaceClick(this);
SXI.createNewClick(this);
}
})
},
initializeLinkButtons : function() {
$('c[sxiButton=true]').each(function(e) {
if(this.newonclick == undefined) {
SXI.replaceClick(this);
SXI.createNewClick(this);
}
})
$('a[sxiDeleteButton=true]').each(function(e) {
if(this.newonclick == undefined) {
SXI.replaceClick(this);
SXI.createNewClick(this);
}
});
},
checkEmptyString : function(element) {
if($.trim(element.val()) == '') {
return true;
} else {
return false;
}
},
enableModalDatePicker : function() {
$('.ui-datepicker').css('z-index', '99998');
}
}

$(function() {
SXI.disableSubmit();
SXI.initializeSXIButtons();
SXI.initializeLinkButtons();






hideSideTips();
hideSideTips2();

setupFunc();
})
function hideSideTips2() {
$('p span.sidetip2').hide();
$('td span.sidetip2').hide();
}
function initializePage() {
SXI.disableSubmit();
SXI.initializeSXIButtons();
SXI.initializeLinkButtons();

initializeSearchButtons();
initializeSearchModalButtons();


SXI.enableSXIButtons();
hideSideTips();
constrainTableWidth();
}
function initializeFormComponents(){
try{initializeToolTips();}
catch(e) {} 
try {hideSideTips();} 
catch(e) {} 
try {hideFeedback();} 
catch(e) {} 
try {initializeDatepicker();} 
catch(e) {}
}
function initializeModal() {
try {SXI.disableSubmit();} 
catch(e) {}
try {SXI.initializeSXIButtons()} 
catch(e) {}
try {SXI.initializeLinkButtons();}
catch(e){}
try {SXI.enableSXIButtons();} 
catch(e) {}
try {hideFeedback();} 
catch(e) {} 
try {initializeDatepicker();} 
catch(e) {}
try {SXI.enableModalDatePicker();}
catch(e) {}
try {hideSideTips();}
catch(e) {}
}
function decorateTextBoxes (){
$('input[type=text]').focus(function() {
if(this.readOnly == false) {
$(this).addClass('inputFocus');
}
});
$('input[type=text]').blur(function() {
$(this).removeClass('inputFocus');
});
}
function toggleSearchList() {
$('.searchFormContainer').each( function(e) {
var i = 0;
$(this).find('.sxiDataView').each( function(e) {
i = i + 1;
})
if (i > 0) {
$(this).fadeIn().show();
} else {
$(this).fadeIn().hide();
}
})
}
function initializeSearchButtons() {
$('input[searchButton=true]').each(function(e) {
this.onvalidate = function() {
var hasCheck = false;
var valid = false;
var hasFilter = false;
var searchContainer = $(this).parents('.searchPanel').get(0);
$(searchContainer).find('input[type=radio]').each(function(e) {
if(this.checked) {
hasCheck = true;
if($(this).parents('tr[localname="search"]').find('input[type=text], select, textarea').size() > 0) {
$(this).parents('tr[localname="search"]').find('input[type=text], select, textarea').each(function(e) {
if($.trim($(this).val()) != '') {
hasFilter = true;
valid = true;
}
})
} else {
valid = true;
hasFilter = true;
}
}
})
if(!hasCheck) {
alert('Please select a radio button first.');
hasFilter = true;
}
if(!hasFilter) {
alert('Please enter a search filter.');
}
if(!valid) {
this.disabled = false;
}
return valid;
}
})
}
function initializeSearchModalButtons() {
$('input[modalRadioButton=true]').each(function(e) {
this.onvalidate = function() {
var thisForm = this.form;
var valid = false;
$(thisForm).find('input[sxiModalSelector=true]').each(function(e) {
if(this.checked) {
valid = true;
} 
})
if(!valid) {
alert("Please select a list item first.");
}
return valid;
}
})
}
function initializeDeleteMultipleButtons() {
$('input[deleteMultipleButton=true]').each(function(e) {
this.onvalidate = function() {
var thisForm = this.form;
var valid = false;
$(thisForm).find('input[sxiSelector=true]').each(function(e) {
if(this.checked) {
valid = true;
} 
})
if(!valid) {

alert("Please select at least one record to delete."); 
}
return valid;
}
})
}

function initializeSelectMultipleButtons() {
$('input[selectMultipleButton=true]').each(function(e) {
this.onvalidate = function() {
var thisForm = this.form;
var valid = false;
$(thisForm).find('input[sxiMultipleSelector=true]').each(function(e) {
if(this.checked) {
valid = true;
} 
})
if(!valid) {
alert("Please select at least one record."); 
}
return valid;
}
})
}
function emptyOverridePanel() {
$('div#override').find('input[type=text], input[type=password]').each(function(e) {
$(this).val('');
})
}
function hideSideTips() {
$('p span.sidetip').hide();
$('td span.sidetip').hide();
}
function clearFeedback(elementForm) {
$(elementForm).find('span.feedbackCss').hide();
}
function initializeDatepicker() {
$('.datepicker').datepicker({
changeMonth: true,
changeYear: true,
yearRange : '-30:+30',
showOn: 'button', 
buttonImage: 'resources/com.ccti.base.web.js.BaseJavascriptBehavior/calendar.gif',

buttonImageOnly: true,
showButtonPanel: true
});
}
function toggleCheckboxes(uuid){
$('#' + uuid).each(function(){
var checked_status = this.checked;
$('.' + uuid).each(function(){
this.checked = checked_status;
});
});
}

function setupFunc() {
document.getElementsByTagName('body')[0].onclick = clickFunc;
hideBusysign();
if(!(typeof Wicket=="undefined")){

Wicket.Ajax.registerPostCallHandler(hideBusysign);
Wicket.Ajax.registerFailureHandler(hideBusysign);
}
}
function hideBusysign() {
if(! (document.getElementById('bysy_indicator') == null) ){
document.getElementById('bysy_indicator').style.display ='none';
}
}
function showBusysign() {
if(! (document.getElementById('bysy_indicator') == null) ){
document.getElementById('bysy_indicator').style.display ='inline';
}
}
function clickFunc(eventData) {
var clickedElement = (window.event) ? event.srcElement : eventData.target;
if (((clickedElement.tagName.toUpperCase() == 'A' 
&& ((clickedElement.target == null) || (clickedElement.target.length <= 0))
&& (clickedElement.href.lastIndexOf('#') != (clickedElement.href.length-1))
&& (!('nobusy' in clickedElement))
&& (clickedElement.href.indexOf('skype') < 0)
&& (clickedElement.href.indexOf('mailto') < 0)
&& (clickedElement.href.indexOf('WicketAjaxDebug') < 0)
&& (clickedElement.href.lastIndexOf('.doc') != (clickedElement.href.length-4))
&& (clickedElement.href.lastIndexOf('.csv') != (clickedElement.href.length-4))
&& (clickedElement.href.lastIndexOf('.xls') != (clickedElement.href.length-4))
&& ((clickedElement.onclick == null) || (clickedElement.onclick.toString().indexOf('window.open') <= 0))
) 
|| (clickedElement.parentNode.tagName.toUpperCase() == 'A' 
&& ((clickedElement.parentNode.target == null) || (clickedElement.parentNode.target.length <= 0))
&& (clickedElement.parentNode.href.indexOf('skype') < 0)
&& (clickedElement.parentNode.href.indexOf('mailto') < 0)
&& (clickedElement.parentNode.href.lastIndexOf('#') != (clickedElement.parentNode.href.length-1))
&& (clickedElement.parentNode.href.lastIndexOf('.doc') != (clickedElement.parentNode.href.length-4))
&& (clickedElement.parentNode.href.lastIndexOf('.csv') != (clickedElement.parentNode.href.length-4))
&& (clickedElement.parentNode.href.lastIndexOf('.xls') != (clickedElement.parentNode.href.length-4))
&& ((clickedElement.parentNode.onclick == null) || (clickedElement.parentNode.onclick.toString().indexOf('window.open') <= 0))
) 
|| (
((clickedElement.onclick == null) 
|| 
((clickedElement.onclick.toString().indexOf('confirm') <= 0)
&& (clickedElement.onclick.toString().indexOf('alert') <= 0) 
&& (clickedElement.onclick.toString().indexOf('Wicket.Palette') <= 0)))
&& (clickedElement.tagName.toUpperCase() == 'INPUT' && (clickedElement.type.toUpperCase() == 'BUTTON' 
|| clickedElement.type.toUpperCase() == 'SUBMIT' || clickedElement.type.toUpperCase() == 'IMAGE'))
))
&& (!( $( clickedElement ).hasClass('nobusy')))) {
if(clickedElement.tagName.toUpperCase() == 'A'){
checkHref(window.location.href, clickedElement.href);
}else if(clickedElement.parentNode.tagName.toUpperCase() == 'A'){
checkHref(window.location.href, clickedElement.parentNode.href);
}else{
showBusysign();
}
}
}
function checkHref(windowhref, urlhref) {
if(urlhref.split("#")[0] != windowhref.split("#")[0]){
showBusysign();
}
}

function SelectAll(name)
{
document.getElementsByName(name)[0].focus();
document.getElementsByName(name)[0].select();
}
$(function(){ 
initializeUI();
});
function imposeJSMaxLength(event, obj) {
var max = $(obj).attr('maxlength');
return imposeMaxLength(event, obj, max);
}
function imposeMaxLength(Event, Object, MaxLen)
{
return (Object.value.length < MaxLen)||(Event.keyCode == 8 ||Event.keyCode==46||(Event.keyCode>=35&&Event.keyCode<=40))
}
function initializeUI(){
$('.sxi-button').hover(
function() { $(this).addClass('ui-state-hover'); },
function() { $(this).removeClass('ui-state-hover'); }
);




var div = document.createElement("div");
$(div).addClass("scrollableContent");
constrainTableWidth();


}
function constrainTableWidth() {

}
function fixTableWidth(){
$(".scrollableContent").each(function(i){
var tableWidth = getTableWidth();
$(this).attr('style', '"width: ' + tableWidth + 'px;"');
});
}
function getTableWidth(){
var winWidth = $(window).width();
if(winWidth < 750){
winWidth = 750;
}
winWidth = Math.floor(winWidth * 0.6);
return winWidth;
}
$(document).ready(function() {
$('#slickbox').hide();

$('a#slick-toggle').click(function() {
$('#slickbox').toggle(400);
return false;
});
constrainTableWidth();
});
$(document).ready(function(){
$("#searchBody").hide();
$("#searchToggleHide").hide();
$("#searchToggleShow").click(function(){
$(this).next("#searchBody").slideDown();
$(this).hide();
$("#searchToggleHide").show();
});
$("#searchToggleHide").click(function(){
$("#searchBody").slideUp();
$(this).hide();
$("#searchToggleShow").show();
});
});
$(document).ready(function(){
$("div.otppagemarker").parents("div#mainwrapper").addClass("otppage");
});
function showErrorMessage() {
$("span[clgdownfeedback='true']").show();
};
$(document).ready(function(){
$("div#right-footer-mybdo").find("a").addClass("nobusy");
$("div#right-footer-mybdo").find("img").addClass("nobusy");
});
function redirectOnError(displayMessage, okRedirectPath){



alert(displayMessage);
window.location= okRedirectPath;
}
$(document).ready (function() {
if (typeof Wicket != 'undefined') {
Wicket.replaceOuterHtmlSafari = function(element, text) {
if (element.tagName == "SCRIPT") {
var tempDiv = document.createElement("div");
tempDiv.innerHTML = text;
var script = tempDiv.childNodes[0].innerHTML;
if (typeof(script) != "string") {
script = tempDiv.childNodes[0].text;
}
element.outerHTML = text;
try {
eval(script);
} catch (e) {
Wicket.Log.error("Wicket.replaceOuterHtmlSafari: " + e + ": eval -> " + script);
}
return;
}
var parent = element.parentNode;
var next = element.nextSibling;
var index = 0;
while (parent.childNodes[index] != element) {
++index;
}
try {
$(element).replaceWith(text);
} catch (ignore) {
element.outerHTML = text; 
}
element = parent.childNodes[index];
while (element != next && element != null) {
try {
Wicket.Head.addJavascripts(element);
} catch (ignore) {
}
element = element.nextSibling;
}
}
if (typeof Wicket.Browser != 'undefined') {
Wicket.Browser.isIE = function() {
return !Wicket.Browser.isSafari() && (typeof(document.all) !== "undefined" || window.navigator.userAgent.indexOf("Trident/")>-1) && typeof(window.opera) === "undefined";
}
}
}
});
