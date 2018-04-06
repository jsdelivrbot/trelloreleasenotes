TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://rawgit.com/stevesefchick/trelloreleasenotes/master/hawkicon.jpg',
      text: 'Release Notes',
	  callback: function(t){
		  return t.popup({
		  title: "Release Notes",
		  url: 'https://rawgit.com/stevesefchick/trelloreleasenotes/master/releasenoteselection.html'
		  
	  });
		  
	  }
    }];
  },
});