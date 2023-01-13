function toggleSwitch(event) {
  console.log(event.target.id);
  if (event.target.innerText === 'I Said No Spoilers!') {
    event.target.innerText = 'Just A Quick Peek.';
    event.target.style.backgroundColor = '#767B91'
    event.target.style.color = 'white';
    chrome.action.setBadgeText({ text: '' });
    swtich = false;
  } else {
    event.target.innerText = 'I Said No Spoilers!';
    event.target.style.backgroundColor = '#F7C59F'
    event.target.style.color = 'black';
    chrome.action.setBadgeText({text:'ON'});
    swtich = true;
  }
}

// when the button is clicked, enable or disable the extension based on previous value
document.getElementById('quickPeekBtn').addEventListener('click', toggleSwitch);
// document.getElementById('quickPeekBtn').addEventListener('click', toggleSwitch);
