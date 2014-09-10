# Rendering Buzzfeed Comments API 

![screenshot](http://i.imgur.com/UCYWfW4.png)

Coding Assignment for Buzzfeed, instructions as follows:

Create a standalone static page using the BuzzFeed Comments API (endpoint URL is http://buzzfeed.com/buzzfeed/api/comments). You will display comments for buzz ID 3371338 (post URL ishttp://buzzfeed.com/jimdalrympleii/here-are-the-cities-where-the-rent-really-is-too-damn-high). The project can use jQuery or native JS. You should design a module that can manage service calls and render the comments data. Your project can use whatever templating utility you prefer. Feel free to copy image assets locally, employing strategies for performance optimization. 

+ Show comments AND reactions by default.
+ Provide some UI to toggle the view to display only comments or only reactions.
+ The reactions and comments should reflect the existing BF styles as closely + as possible (without copy and pasting the production CSS)
+ You should only display the first 100 contributions at first, then paginate the rest in sets of 100 using a "Load More Responses" button
+ Reactions should use an appropriate icon if necessary (s.buzzfed.com/static/images/public/social/love_small.png or s.buzzfed.com/static/images/public/social/hate_small.png) 
+ Use a "friendly" date format (about X days ago, Y hours ago, etc)


## TODO:
* ~~object for reaction~~
* ~~object for contribution~~
* ~~markup for reaction~~
* ~~markup for contribution~~
* ~~css for reaction~~
* ~~css for contribution~~
* ~~AJAX GET buzzfeed data~~
* ~~Pagination/Load More button~~
* ~~Combining multiple reactions into single row~~
* ~~Rendering reaction using template~~
* ~~Rendering contribution using template~~
* ~~Child contributions (reactions are already counted)~~
* ~~Hiding contributions and reactions (toggle class on body)~~
* ~~Friendly date format~~

## Objects:
```
Reaction {
	userId: string
	verb: string
	reactions: string[]
	added: timestamp 
}

Contribution {
	userId: string
	added: timestamp
	blurb: html-string
	children: Contribution[]
}
```
