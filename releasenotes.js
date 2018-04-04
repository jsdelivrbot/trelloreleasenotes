var t = TrelloPowerUp.iframe();

window.releasenotes.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'shared', 'releasenotes', window.estimateSize.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  t.sizeTo('#releasenotes').done();
});