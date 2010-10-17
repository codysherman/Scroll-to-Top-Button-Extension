// A generic onclick callback function.
function genericOnClick(info, tab) {
  $("html, body").animate({scrollTop:"0"},1000,"jswing");
}

// Create one test item for each context type.
var contexts = ["page","selection","link","editable","image","video",
                "audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": genericOnClick});
}
