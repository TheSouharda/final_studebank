'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [2000, -455, -100, -50, -25, -133, -79, -130],
//   food: [455, 20],
//   study: [100, 79],
//   entertainment: [133, 130],
//   misc: [50],
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-07-26T17:01:17.194Z',
//     '2020-07-28T23:36:17.929Z',
//     '2020-08-01T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Souvik Dey',
//   movements: [5000, -340, -150, -790, -32, -100, -460, -30],
//   food: [340, 20],
//   study: [32, 100],
//   entertainment: [150, 460],
//   misc: [30],
//   pin: 2222,

//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'INR',
//   locale: 'en-IN',
// };

// const account3 = {
//   owner: 'Souharda Biswas',
//   movements: [3000, -455, -306, -25, -64, -133, -79, -130],
//   food: [455, 130],
//   study: [133, 79],
//   entertainment: [306, 79],
//   misc: [25, 64],
//   pin: 3333,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-07-26T17:01:17.194Z',
//     '2020-07-28T23:36:17.929Z',
//     '2020-08-01T10:51:36.790Z',
//   ],
//   currency: 'INR',
//   locale: 'en-IN', // de-DE
// };
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-07-26T17:01:17.194Z',
//     '2020-07-28T23:36:17.929Z',
//     '2020-08-01T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const accounts = [account1, account2, account3];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const modal = document.getElementById('simpleModal');
const modalCon = document.querySelector('.modal');
const closeBtn = document.getElementById('closeBtn');
const modalBtn = document.getElementById('sign_up');
const admin = document.getElementById('admin');

const admin_cont = document.querySelector('.admin_cont');

const logModal = document.getElementById('logModal');
const log = document.querySelector('.log');
const logInBtn = document.getElementById('log_in');

const logOut = document.getElementById('log_out');
const end = document.getElementById('end');

const select = document.querySelector('#selectBox');

const signupForm = document.querySelector('.myForm');

let myChart;

//-----------------------------ADMIN PAGE VARIABLES-------------------------
const intro = document.getElementById('intro');
const entertainment = document.getElementById('enter');
const food = document.getElementById('food');
const study = document.getElementById('study');

/////////////////////////////////////////////////
// Functions

modalBtn.addEventListener('click', () => {
  modalCon.style.visibility = 'visible';
});
closeBtn.addEventListener('click', () => {
  modalCon.style.visibility = 'hidden';
});

logInBtn.addEventListener('click', () => {
  log.style.visibility = 'visible';
});
btnLogin.addEventListener('click', () => {
  log.style.visibility = 'hidden';
});

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat('en-IN').format(date);
};

const formatCur = function (value, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'INR',
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    // console.log(date);
    const displayDate = formatMovementDate(date);

    const formattedMov = formatCur(mov, 'en-IN');

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, 'en-IN', 'INR');
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, 'en-IN', 'INR');

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), 'en-IN', 'INR');
};

const calcDisplaySection = function (acc) {
  let sections = [];
  const enter = acc.entertainment.reduce((acc, ent) => acc + ent, 0);
  entertainment.textContent = formatCur(Math.abs(enter), 'en-IN', 'INR');
  sections.push(enter);

  const studySum = acc.study.reduce((acc, stu) => acc + stu, 0);
  study.textContent = formatCur(Math.abs(studySum), 'en-IN', 'INR');
  sections.push(studySum);

  const foodSum = acc.food.reduce((acc, foo) => acc + foo, 0);
  food.textContent = formatCur(Math.abs(foodSum), 'en-IN', 'INR');
  sections.push(foodSum);

  const miscSum = acc.misc.reduce((acc, mis) => acc + mis, 0);
  misc.textContent = formatCur(Math.abs(miscSum), 'en-IN', 'INR');
  sections.push(miscSum);
  console.log(sections);
};

const showDetails = acc => {
  let value = [];
  const enter = acc.entertainment.reduce((acc, ent) => acc + ent, 0);
  value.push(enter);
  const studySum = acc.study.reduce((acc, stu) => acc + stu, 0);
  value.push(studySum);

  const foodSum = acc.food.reduce((acc, foo) => acc + foo, 0);
  value.push(foodSum);

  const miscSum = acc.misc.reduce((acc, mis) => acc + mis, 0);
  value.push(miscSum);

  let max_of_array = Math.max.apply(Math, value);

  if (enter === max_of_array) {
    console.log('to much entertainment');
  } else if (studySum === max_of_array) {
    console.log('to much study');
  } else if (foodSum === max_of_array) {
    console.log('to much food');
  } else if (miscSum === max_of_array) {
    console.log('to much smoking');
  }
};

const createArray = acc => {
  let arr = [];
  const enter = acc.entertainment.reduce((acc, ent) => acc + ent, 0);
  arr.push(enter);
  const studySum = acc.study.reduce((acc, stu) => acc + stu, 0);
  arr.push(studySum);

  const foodSum = acc.food.reduce((acc, foo) => acc + foo, 0);
  arr.push(foodSum);

  const miscSum = acc.misc.reduce((acc, mis) => acc + mis, 0);
  arr.push(miscSum);

  return arr;
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);

  calcDisplaySection(acc);

  showDetails(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, password;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.stopPropagation();
  e.preventDefault();

  admin_cont.classList.add('hide');

  password = inputLoginPin.value;

  db.collection('accounts')
    .doc(password)
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        currentAccount = docSnapshot.data();
        labelWelcome.textContent = `Welcome back, ${
          currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;
        intro.textContent = `Hello, ${currentAccount.owner.split(' ')[0]}`;

        console.log(currentAccount);

        // Create current date and time
        const now = new Date();
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          // weekday: 'long',
        };

        labelDate.textContent = new Intl.DateTimeFormat(
          currentAccount.locale,
          options
        ).format(now);

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
        showDetails(currentAccount);
        calcDisplaySection(currentAccount);
      } else {
        alert('wrong Pin !');
      }
    });
});

btnTransfer.addEventListener('click', function (e) {
  console.log('nrrgro');
  e.preventDefault();
  e.stopPropagation();
  const choice = select.options[select.selectedIndex].value;
  const amount = +inputTransferAmount.value;
  const neg = -amount;

  var accUp = db.collection('accounts').doc(password);

  inputTransferAmount.value = '';

  if (amount > 0) {
    // Doing the transfer
    accUp.update({
      movements: firebase.firestore.FieldValue.arrayUnion(neg),
    });

    //Add transfer to the sepcific option

    if (choice === 'food') {
      accUp.update({
        food: firebase.firestore.FieldValue.arrayUnion(amount),
      });
    } else if (choice === 'study') {
      accUp.update({
        study: firebase.firestore.FieldValue.arrayUnion(amount),
      });
      console.log('pushed into study');
    } else if (choice === 'entertainment') {
      accUp.update({
        entertainment: firebase.firestore.FieldValue.arrayUnion(amount),
      });
      console.log('pushed into entertainment');
    } else if (choice === 'misc') {
      accUp
        .update({
          misc: firebase.firestore.FieldValue.arrayUnion(amount),
        })
        .then(() => {
          console.log('taka dieche');
        })
        .catch(error => {
          // The document probably doesn't exist.
          console.error('bal chera geche: ', error);
        });
      console.log('pushed into misc');
    }

    const samay = new Date().toISOString();
    // Add transfer date
    accUp.update({
      movementsDates: firebase.firestore.FieldValue.arrayUnion(samay),
    });

    let acnt;

    db.collection('accounts')
      .doc(password)
      .get()
      .then(docSnapshot => {
        acnt = docSnapshot.data();
        console.log(acnt);
        // Update UI
        updateUI(acnt);
      });
    showDetails(acnt);
    calcDisplaySection(acnt);
  }
});

btnLoan.addEventListener('click', function (e) {
  console.log('dilam');
  e.preventDefault();
  e.stopPropagation();
  console.log('nrrgro');
  const amount = Math.floor(inputLoanAmount.value);
  console.log(amount);
  var accUp = db.collection('accounts').doc(password);

  // Add movement
  accUp
    .update({
      movements: firebase.firestore.FieldValue.arrayUnion(amount),
    })
    .then(() => {
      console.log('taka nieche');
    })
    .catch(error => {
      // The document probably doesn't exist.
      console.error('bal chera geche: ', error);
    });

  console.log('added');

  // Add loan date
  accUp.update({
    movementsDates: firebase.firestore.FieldValue.arrayUnion(
      new Date().toISOString()
    ),
  });

  let lacnt;

  db.collection('accounts')
    .doc(password)
    .get()
    .then(docSnapshot => {
      lacnt = docSnapshot.data();
      // Update UI
      updateUI(lacnt);
    });

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log(password);

  const closeAccPin = inputClosePin.value;
  console.log(closeAccPin);

  if (closeAccPin != password) {
    alert('Wrong Pin');
  } else {
    db.collection('accounts').doc(closeAccPin).delete();

    alert('User Account is deleted');
    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

logOut.addEventListener('click', () => {
  labelWelcome.textContent = 'Log in to get started';
  containerApp.style.opacity = 0;
});

signupForm.addEventListener('submit', e => {
  e.preventDefault();

  modalCon.style.visibility = 'hidden';

  // get user info
  const email = signupForm['email_inp'].value;
  const password = signupForm['password_inp'].value;

  // sign up the user
  db.collection('accounts')
    .doc(password)
    .set({
      owner: email,
      movements: [],
      food: [],
      study: [],
      entertainment: [],
      misc: [],
      movementsDates: [],
      pin: password,
      locale: 'en-IN',
      currency: 'INR',
    })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch(error => {
      console.error('Error writing document: ', error);
    });

  let newAcnt;

  db.collection('accounts')
    .doc(password)
    .get()
    .then(docSnapshot => {
      newAcnt = docSnapshot.data();

      labelWelcome.textContent = `Welcome back, ${newAcnt.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;

      console.log(newAcnt);

      // Create current date and time
      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        // weekday: 'long',
      };

      labelDate.textContent = new Intl.DateTimeFormat(
        newAcnt.locale,
        options
      ).format(now);

      // Update UI
      updateUI(newAcnt);
    });
});

admin.addEventListener('click', () => {
  admin_cont.classList.remove('hide');
  let hamba = createArray(currentAccount);
  chart(hamba);
  // console.log(hamba);
});

end.addEventListener('click', () => {
  myChart.destroy();
  admin_cont.classList.add('hide');
});

//--------------------CHART-----------------

const chart = sections => {
  let ctx = document.getElementById('mychart').getContext('2d');
  ctx.height = 100;

  let labels = ['Entertainment', 'Studies', 'Food', 'Misc.'];
  let colorHex = ['#FB3640', '#43AA8B', '#EFCA08', '#253D5B'];

  myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      datasets: [
        {
          data: sections,
          backgroundColor: colorHex,
        },
      ],
      labels: labels,
    },
    options: {
      radius: 120,
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 0,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  });
};
