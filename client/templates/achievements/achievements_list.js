Template.achievementsList.helpers({
	achievementsOf: function(member) {
		//TODO Fix this shit
		return Achievements.find({
			_id: {$in: MembersAchievements.find({
				_id: member._id
			}, {
				fields: {achievement: 1, _id: 0}
			}).fetch()}
		});
	},
	achievements: function() {
		return Achievements.find();
	}
});
