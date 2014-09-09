var ContributionFactory = function(data){
  var contribution = {
    "added": data.f_raw,
    "blurb": data.blurb,
    "userId": data.user_id,
    "children": []
  }
  if (data.children){
    $.each(data.children, function(index, value){
      if (value.form != "text") return;
      contribution.children.push(ContributionFactory(value));
    }); 
  }
  return contribution;
}


var ReactionFactory = function(data_array){
  var reaction = {
    reactions: []
  };
  $.each(data_array, function(index, data){
    reaction.added = data.f_raw;
    reaction.userId = data.user_id;
    if (data.form == "badge_vote") reaction.reactions.push(data.badge_title);
    if (data.form == "loves" || data.form == "hates") reaction.verb = data.form
  });
  return reaction;
}