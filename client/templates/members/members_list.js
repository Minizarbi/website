Template.membersList.helpers({
	members: function() {
		Meteor.subscribe('members');
		Meteor.subscribe('achievements');
		Meteor.subscribe('members_achievements');
		return Members.find();
	}
});
