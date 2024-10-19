
(function($) 
{
$.fn.maxlength = function(options)
{
var settings = jQuery.extend(
{
events: [], 
maxCharacters: 10, 
status: true, 
statusClass: "status", 
statusText: "character(s) left", 
notificationClass:	"notification",	
showAlert: false, 
alertText: "You have typed too many characters.", 
slider: false 
}, options );

$.merge(settings.events, ['keyup']);
return this.each(function() 
{
var item = $(this);
var charactersLength = item.val().length;
var maxlengthAttr = item.attr('maxlength');
if (maxlengthAttr) {
settings.maxCharacters = maxlengthAttr;
}

function updateStatus()
{
var charactersLeft = settings.maxCharacters - charactersLength;
if(charactersLeft < 0) 
{
charactersLeft = 0;
}
item.nextAll("div."+settings.statusClass).html(charactersLeft + " " + settings.statusText);
}
function checkChars() 
{
var valid = true;

if(charactersLength >= settings.maxCharacters) 
{

valid = false;

item.addClass(settings.notificationClass);
item.nextAll("div."+settings.statusClass).addClass(settings.notificationClass);



showAlert();
} 
else 
{

if(item.nextAll("div."+settings.statusClass).hasClass(settings.notificationClass)) 
{
item.nextAll("div."+settings.statusClass).removeClass(settings.notificationClass);
}
if(item.hasClass(settings.notificationClass)) 
{
item.removeClass(settings.notificationClass);
}
}
if(settings.status)
{
updateStatus();
}
}

function showAlert() 
{
if(settings.showAlert)
{
alert(settings.alertText);
}
}

function validateElement() 
{
var ret = false;
if(item.is('textarea')) {
ret = true;
} else if(item.filter("input[type=text]")) {
ret = true;
} else if(item.filter("input[type=password]")) {
ret = true;
}
return ret;
}

if(!validateElement()) 
{
return false;
}

$.each(settings.events, function (i, n) {
item.bind(n, function(e) {
charactersLength = item.val().length;
checkChars();
});
});

if(settings.status) 
{
item.after($("<div/>").addClass(settings.statusClass).html('-'));
updateStatus();
}

if(!settings.status) 
{
var removeThisDiv = item.nextAll("div."+settings.statusClass);
if(removeThisDiv) {
removeThisDiv.remove();
}
}

if(settings.slider) {
item.next().hide();
item.focus(function(){
item.next().slideDown('fast');
});
item.blur(function(){
item.next().slideUp('fast');
}); 
}
});
};
})(jQuery);
