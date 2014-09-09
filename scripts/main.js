$(document).ready(function() {
    var reactionTemplate = Handlebars.compile($("#reaction-template").html());
    var contributionTemplate = Handlebars.compile($("#contribution-template").html());
    Handlebars.registerPartial("contribution-inner-partial", $("#contribution-inner-partial").html());
    console.log("good to go!");
});