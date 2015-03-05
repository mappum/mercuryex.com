var PATH = 'https://github.com/mappum/mercury/releases/download/0.0.1-alpha/MercuryWallet-0.0.1-SNAPSHOT.';

function getPlatform() {
  var p = window.navigator.platform.toLowerCase();
  if(p.indexOf('win') === 0) return 'windows';
  else if(p.indexOf('mac') === 0) return 'apple';
  // TODO: mobile
}

function getFiletype() {
  var suffix = '';
  var p = window.navigator.platform.toLowerCase();
  if(p.indexOf('win') === 0) suffix = 'exe';
  else if(p.indexOf('mac') === 0) suffix = 'dmg';
  else suffix = 'jar';

  return suffix;
}

$(function() {
  var platform = getPlatform();
  var suffix = getFiletype();

  $('.download-button').each(function(i, el) {
    el = $(el);
    var filename = PATH + (el.attr('data-suffix') || suffix);
    el.attr('href', filename)
      .find('> .platform-icon').addClass('fa-' + platform);
  });
});