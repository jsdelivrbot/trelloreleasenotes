var t = TrelloPowerUp.iframe();

window.releasenotes.addEventListener('submit', function(event){
  event.preventDefault();
  return t.set('card', 'shared', 'releasenotes', window.releaseNoteData.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  t.sizeTo('#releasenotes').done();
});

t.render(function(){
  return t.get('card', 'shared', 'releasenotes')
  .then(function(releasenotes){
    window.releaseNoteData.value = releasenotes;
  })
  .then(function(){
	t.sizeTo('#releasenotes').done();
  });
});