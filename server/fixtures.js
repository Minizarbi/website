if (Members.find().count() === 0 && Achievements.find().count() === 0 && MembersAchievements.find().count() === 0) {
	var firstId = Members.insert({name: 'First', description: 'Je suis le premier et j\' ai pleins de succès.'});
	var secondId = Members.insert({name: 'Second', description: 'Je suis le second et j\' ai moins de succès.'});
	var thirdId = Members.insert({name: 'Third', description: 'Je suis le troisième et je n\'ai pas de succès.'});

	var firstAchId = Achievements.insert({name: 'Cycleman', description: 'Rouler dans la semoule avec un vélo.'});
	var secondAchId = Achievements.insert({name: 'Barbapapa', description: 'Être un Barbapapa.'});
	var thirdAchId = Achievements.insert({name: 'Cassoulet', description: 'Peter quand les gens vous mordent.'});

	MembersAchievements.insert({member: firstId, achievement: firstAchId});
	MembersAchievements.insert({member: firstId, achievement: secondAchId});
	MembersAchievements.insert({member: firstId, achievement: thirdAchId});
	MembersAchievements.insert({member: secondId, achievement: firstAchId});
}
