function toggleSwitch(event) {

  if (event.target.innerText === 'I Said No Spoilers!') {
    event.target.innerText = 'Just A Quick Peek...';
    chrome.action.setBadgeText({ text: 'OFF' });
    swtich = false;
  } else {
    event.target.innerText = 'I Said No Spoilers!';
    chrome.action.setBadgeText({text:'ON'});
    swtich = true;
  }
}

// when the button is clicked, enable or disable the extension based on previous value
document.getElementById('noSpoilersBtn').addEventListener('click', toggleSwitch);
