chrome.runtime.sendMessage('I am loading content script', (response) => {
    console.log(response);
    console.log('I am content script')

})

window.onload = (event) => {
    // alert('I am from fully loaded extension')
    console.log('page is fully loaded');
};
