$('.progress-bar').each(function() {
  var barValue = $(this).attr('aria-valuenow');
  switch (barValue) {
    case '20':
      $(this).attr('style', 'width: ' + barValue + '%;' + 'background-color: #ef5350');
      break;
    case '40':
      $(this).attr('style', 'width: ' + barValue + '%;' + 'background-color: #ef6c00');
      break;
    case '48':
      $(this).attr('style', 'width: ' + barValue + '%;' + 'background-color: #40c4ff');
      break;
    case '64':
      $(this).attr('style', 'width: ' + barValue + '%;' + 'background-color: #7cb342');
      break;
    case '100':
      $(this).attr('style', 'width: ' + barValue + '%;' + 'background-color: #1b5e20');
      break;
    default:
      $(this).attr('style', 'width: ' + barValue + '%;' + 'background-color: #ef6c00');
  }
});
