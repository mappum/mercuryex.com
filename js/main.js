var PATH = 'https://github.com/mappum/mercury/releases/download/0.0.1-alpha/MercuryWallet-0.0.1-SNAPSHOT.';

function getPlatform(platform) {
  var p = platform.toLowerCase();
  if(p.indexOf('win') === 0) return 'windows';
  else if(p.indexOf('mac') === 0) return 'apple';
  // TODO: mobile
}

function getFiletype(platform) {
  var suffix = '';
  var p = platform.toLowerCase();
  if(p.indexOf('win') === 0) suffix = 'exe';
  else if(p.indexOf('mac') === 0) suffix = 'dmg';
  else suffix = 'jar';

  return suffix;
}

$(function() {
  var platform = getPlatform(window.navigator.platform);
  var suffix = getFiletype(window.navigator.platform);

  $('.download-button').each(function(i, el) {
    el = $(el);

    var s = suffix;
    if(el.attr('data-platform')) s = getFiletype(el.attr('data-platform'));
    el.attr('href', PATH + s);

    var p = platform;
    if(el.attr('data-platform')) p = getPlatform(el.attr('data-platform'));
    el.find('> .platform-icon').addClass('fa-' + p);
  });
});