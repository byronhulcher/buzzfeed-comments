Handlebars.registerHelper('badges', function(context, options) {
  var ret = "";

  for(var i=0; i<context.length; i++) {
    ret += "<a href='http://buzzfeed.com' class='badge'>" + context[i] + "</a>";
    if (i < context.length - 2){
      ret += ", ";
    }
    else if (i == context.length - 2){
      ret += " & ";
    }
  }

  return ret;
});

Handlebars.registerHelper('prettyDate', function(context, options) {
  var ret = "about ";
  ret += $.timeago(context)
  return ret;
});