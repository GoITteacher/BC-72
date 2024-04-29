/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!===============================================================

// const dog = {
//   name: 'Lord',
//   breed: 'Spaniel',
//   age: 5,

//   sayWoof() {
//     console.log('Woof woof');
//   },
//   eat() {
//     console.log('Дякую хозяін');
//   },
//   sleep() {
//     console.log('Zzzzz');
//   },
//   findDrugs() {},
//   pee() {},
// };

// const cat = {
//   name: 'Barsik',
//   breed: '...',
//   age: '',

//   scratch() {},
//   sayMeow() {
//     console.log('Meow');
//   },
// };

// dog.sayWoof();
// cat.sayMeow();

//!===============================================================

const user1 = {
  name: 'Borys',
  age: 25,
  city: 'Dnipro',

  showInfo() {
    console.log(this.name);
  },
};

const user2 = {
  name: 'Vasya',
  age: 25,
  city: 'Dnipro',

  showInfo() {
    console.log(this.name);
  },
};

const user3 = {
  name: 'Petro',
  age: 25,
  city: 'Dnipro',

  showInfo() {
    console.log(this.name);
  },
};

// user2.showInfo();

//!===============================================================

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   changeName(newName) {
//     if (newName.length >= 3) {
//       this.name = newName;
//     }
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     if (newRating > 0 && newRating <= 5) {
//       this.rating = newRating;
//     }
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('New playlist name');

// console.log(playlist.name);

// playlist.addTrack('new track 1');
// playlist.addTrack('new track 2');
// playlist.addTrack('new track 3');
// console.log(playlist.getTrackCount());
// //
// playlist.addTrack('new track 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

//!===============================================================
