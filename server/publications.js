Meteor.publish('members', function() {
	return Members.find();
});
<<<<<<< HEAD

Meteor.publish('achievements', function() {
	return Achievements.find();
});

Meteor.publish('members_achievements', function() {
	return MembersAchievements.find();
});
