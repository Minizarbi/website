Meteor.publish('members', function() {
	return Members.find();
});
Meteor.publish('achievements', function() {
	return Achievements.find();
});
