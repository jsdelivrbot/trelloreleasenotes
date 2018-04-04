TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://rawgit.com/stevesefchick/trelloreleasenotes/master/hawkicon.jpg.jpg',
      text: 'Release Note!',
	  callback: function(t){
		  return t.popup({
		  title: "Friendly Release Notes",
		  url: 'https://rawgit.com/stevesefchick/trelloreleasenotes/master/releasenoteselection.html'
		  
	  });
		  
	  }
    }];
  },
});