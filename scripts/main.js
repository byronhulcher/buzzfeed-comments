var nextPageNumber = 1;

$(document).ready(function() {
    var onLoadCommentsSuccess = function(data){
      console.log(data);
      nextPageNumber = data.paging.next;
      if (!nextPageNumber) $("#load-more-button").hide();

      var reactionStack = [];

      $.each(data.comments, function(index, commentData){
        if(reactionStack.length > 0 && (reactionStack[0].user_id != commentData.user_id || commentData.comment_type != "reaction")){
          var reactionData = ReactionFactory(reactionStack);
          reactionStack = [];
          var reactionMarkup = reactionTemplate(reactionData);
          $(".comments-block").append(reactionMarkup);
        }

        if (commentData.comment_type == "contribution" && commentData.form == "text"){
          var contributionData = ContributionFactory(commentData);
          var contributionMarkup = contributionTemplate(contributionData);
          $(".comments-block").append(contributionMarkup);
        }
        else if (commentData.comment_type == "reaction"){
          reactionStack.push(commentData);
        }
      });

      if(reactionStack.length > 0){
        var reactionData = ReactionFactory(reactionStack);
        var reactionMarkup = reactionTemplate(reactionData);
        $(".comments-block").append(reactionMarkup);
      }

      // insert into DOM
      $("#load-more-button").prop("disabled", false)
    };

    var loadComments = function(){
      if (!nextPageNumber) return;
      $("#load-more-button").prop("disabled", true)
      $.get(
        "http://buzzfeed.com/buzzfeed/api/comments", 
        {
          'page': nextPageNumber,
          'limit': 100,
          'types': 'contributions,reactions',
          'buzz_id': 3371338,
        },
        onLoadCommentsSuccess
      );
    };

    var reactionTemplate = Handlebars.compile($("#reaction-template").html());
    var contributionTemplate = Handlebars.compile($("#contribution-template").html());
    Handlebars.registerPartial("contribution-inner-partial", $("#contribution-inner-partial").html());
    
    $("#load-more-button").on('click', function(){
      console.log("clicked");
      if ($(this).is(':disabled')) return;
      console.log("loading")
      loadComments();
    });
    console.log("?!?!?!")
    loadComments();
});

