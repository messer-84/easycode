var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('принцесса едем на Бали');
  }, 1000);
})
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.error(e);
  });