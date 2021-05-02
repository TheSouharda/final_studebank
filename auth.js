// listen for auth status changes
// auth.onAuthStateChanged(user => {
//   if (user) {
//     console.log('user logged in: ', user);
//   } else {
//     console.log('user logged out');
//   }
// });

// signup

// sign up the user
db.collection('accounts')
  .doc('3333')
  .set({
    owner: 'Souharda Biswas',
    movements: [5000, -340, -150, -790, -32, -100, -460, -30],
    food: [340, 20],
    study: [32, 100],
    entertainment: [150, 460],
    misc: [30],
    pin: '3333',

    movementsDates: [
      '2021-04-01T13:15:33.035Z',
      '2021-04-30T09:48:16.867Z',
      '2021-04-25T06:04:23.907Z',
      '2021-04-25T14:18:46.235Z',
      '2021-04-05T16:33:06.386Z',
      '2021-04-10T14:43:26.374Z',
      '2021-04-26T18:49:59.371Z',
      '2021-04-28T12:01:20.894Z',
    ],

    locale: 'en-IN',
    currency: 'INR',
  })
  .then(() => {
    console.log('Document successfully written!');
  })
  .catch(error => {
    console.error('Error writing document: ', error);
  });
