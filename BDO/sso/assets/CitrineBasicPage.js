var count = 0;
function cancelBack() {
try {
window.history.forward();
} catch (e) {
}
if(count != 20) {
count = count + 1;
setTimeout("cancelBack()", 250);
}
}

function backButtonOverride() {
setTimeout("backButtonOverrideBody()", 1);
}
function backButtonOverrideBody() {
try {
window.history.forward();
} catch (e) {
}
setTimeout("backButtonOverrideBody()", 100);
}
function noBack() {
window.history.forward(2);
}
