## TODO:
	* ~~object for reaction~~
	* ~~object for contribution~~
	* markup for reaction
	* markup for contribution
	* css for reaction
	* css for contribution
	* AJAX GET buzzfeed data
	* Pagination/Load More button
	* Combining multiple reactions into single row
	* Rendering reaction using template
	* Rendering contribution using template
	* Child contributions (reactions are already counted)
	* Hiding contributions and reactions (toggle class on body)
	* Friendly date format

## Objects:
```Reaction {
	userId: string
	loves: bool
	hates: bool
	reactions: string[]
	added: datetime 
}
```

```Contribution {
	userId: string
	loveCount: int
	hateCount: int
	blurb: html-string
	children: Contribution[]
}
```
