// NOTE: replace 'bmjpkU8bBWRse2JwKgzOGTv5tUI3' with your Firebase auth user id (can be taken from Firebase at the auth section! Look for User UID)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'twcHPv91KPR2Dck0SEhRegIVaD82',
        username: 'Solodolley',
        fullName: 'Solo Omaru Dolley',
        emailAddress: 'solodolley@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'ansujabateh',
        fullName: 'Ansu Jabateh',
        emailAddress: 'ansujabateh@yahoo.com',
        following: [],
        followers: ['twcHPv91KPR2Dck0SEhRegIVaD82'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'lasskenneh',
        fullName: 'Lassana Kenneh',
        emailAddress: 'lassanakenneh@gmail.com',
        following: [],
        followers: ['twcHPv91KPR2Dck0SEhRegIVaD82'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'daudasanoe',
        fullName: 'Dauda Sanoe',
        emailAddress: 'daudasanoe@outlook.com',
        following: [],
        followers: ['twcHPv91KPR2Dck0SEhRegIVaD82'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/ansu/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'lass',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'ansu',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  

  console.log("run")