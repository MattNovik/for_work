var useActiveX = typeof ActiveXObject !== 'undefined';
function loadJSON(file, callback) {
    var xobj;
    if (useActiveX) {
        xobj = new ActiveXObject('Microsoft.XMLHTTP'); 
    } else {
        xobj = new XMLHttpRequest();
    }
    xobj.callback = callback;
    if (xobj.overrideMimeType) {
        xobj.overrideMimeType('application/json');
    }
    xobj.open('GET', file, false);
    xobj.onreadystatechange = function() {
        if (this.readyState === 4) {
            this.callback(this);
        }
     }
     xobj.send(null);
}

loadJSON('products.json', function(data) {
    alert(data);
});