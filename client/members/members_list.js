Template.membersList.helpers({
	members: function() {
		Meteor.subscribe('members');
		Meteor.subscribe('achievements');
		return Members.find();
	}
});
