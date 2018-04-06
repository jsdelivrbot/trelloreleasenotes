TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://rawgit.com/stevesefchick/trelloreleasenotes/master/hawkicon.jpg',
      text: 'Release Notes',
	  callback: function(t){
		  return t.popup({
		  title: "Release Notes",
		  url: 'https://rawgit.com/stevesefchick/trelloreleasenotes/master/releasenotes.html'
		  
	  });
		  
	  }
    }];
  },
    'card-badges': function(t, options) {
		return t.get('card','shared','releasenotes')
		.then(function(releasenotes) {
			return [{
			  icon: releasenotes || 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
			}];
		}];
	},
});