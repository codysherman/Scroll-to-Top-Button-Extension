// A generic onclick callback function.
function genericOnClick(info, tab) {
chrome.tabs.create({url:'/options.html'});
}

// Creates context menu
if (localStorage["contextmenu"]=="on") {
    var contexts = ["page","image"];
    for (var i = 0; i < contexts.length; i++) {
        var context = contexts[i];
        var id = chrome.contextMenus.create({ "title": 'Scroll To Top Button Options', "contexts": [context], "onclick": genericOnClick });
    }
}