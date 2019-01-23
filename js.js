var jqxhr = $.getJSON( "example.json", function() {
console.log( "success" );
})
.done(function() { console.log( "second success" ); })
.fail(function() { console.log( "error" ); })
.always(function() { console.log( "complete" ); });
// тут другой код...
// другой метод, который запустится после завершения запроса
jqxhr.complete(function() { console.log( "second complete" );