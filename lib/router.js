Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'actualites'});
Router.route('presentation', {name: 'presentation'});
Router.route('contact', {name: 'contact'});
Router.route('irc', {name: 'irc'});
