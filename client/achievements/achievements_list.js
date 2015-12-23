Template.achievementsList.helpers({
	achievementsOf: function(member) {
		// TODO Find only member's achievements
		return Achievements.find({
			_id: {$in: member.achievements}
		});
	},
	achievements: function() {
		return Achievements.find();
	}
});
