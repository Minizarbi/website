Meteor.publish('members', function() {
	return Members.find();
});

Meteor.publish('achievements', function() {
	return Achievements.find();
});

Meteor.publish('members_achievements', function() {
	return MembersAchievements.find();
});
