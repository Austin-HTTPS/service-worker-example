if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw3.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}