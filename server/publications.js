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
=======
Meteor.publish('achievements', function() {
	return Achievements.find();
});
>>>>>>> 1c6854217e0518b23357933d0db918ee454e9a0c
