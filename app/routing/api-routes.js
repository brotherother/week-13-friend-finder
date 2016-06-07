
var friendData	= require('../data/friends.js');
var path		= require('path');

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
app.get('/api/friends', function(req, res) {

});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/api/friends', function(req, res) {
	
	res.json(true);
	var newFriend = {
		"name": $('#name'),
		"photo": $('#photo'),
		"scores": [
		$('#q1'.value),
		$('#q2'.value)
		$('#q3'.value)
		$('#q4'.value)
		$('#q5'.value)
		$('#q6'.value)
		$('#q7'.value)
		$('#q8'.value)
		$('#q9'.value)
		$('#q10'.value)
		]
	};

	var difference = 0;
	var friendMatch;

	//fix logic
	for (var i = 1; i < friendData.length; i++) {
		for (var n = 1; n < 11; n++) {
			if (difference < Math.abs(friendData[i].scores[n] - newFriend.scores[n])) {
				difference += Math.abs(friendData.scores[i] - newFriend.scores[i]);
				friendMatch = 
			}
		}
		if ()
	};

	friendData.push(newFriend);

	$('#matchImg').attr('src', friendMatch.photo);

	
});