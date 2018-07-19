var url ='http://64px.com/instagram/';
var page = new WebPage()
var fs = require('fs');


page.open(url, function (status) {
        just_wait();
});

function just_wait() {
    setTimeout(function() {
               fs.write('new.html', page.content, 'w');
            phantom.exit();
    }, 2500);
}
