const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/foodtruck');

const truckSeed = [
  {
    truckname: 'Taco Man',
    image:
      'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=563&q=80',
    foodkeywords: ['taco', 'tacos', 'mexican'],
    otherphotos: [
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80',
      'https://images.unsplash.com/photo-1545092724-ebd263517948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
    location: { latitude: 48.712571, longitude: -122.444837 },
  },
  {
    truckname: 'Sushi Man',
    image:
      'https://images.unsplash.com/photo-1589273429273-633bbf47a407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
    foodkeywords: ['sushi', 'japanese'],
    otherphotos: [
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1563612116891-9b03e4bb9318?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
    location: { latitude: 48.711297, longitude: -122.44076 },
  },
  {
    truckname: 'Pizza Man',
    image:
      'https://images.unsplash.com/photo-1551888797-e7d1f43d28c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    location: { latitude: 48.713392, longitude: -122.445095 },
    foodkeywords: ['pizza', 'calzone'],
    otherphotos: [
      'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1590083745251-4fdb0b285c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1536964549204-cce9eab227bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
  {
    truckname: 'Burger Man',
    image:
      'https://images.unsplash.com/photo-1508424897381-4fd8755e4b7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
    location: { latitude: 48.711, longitude: -122.44076 },
    foodkeywords: ['burgers', 'fries', 'keto', 'sliders'],
    otherphotos: [
      'https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1503584023468-b9fb3b6862a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1544027657-36ca1f4a0a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
  {
    truckname: 'Elote Man',
    image:
      'https://images.unsplash.com/photo-1531950110602-9c09c9102fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    location: { latitude: 33.4484, longitude: -112.0740 },
    foodkeywords: ['street corn', 'elote', 'aguas frescas', 'mexican'],
    otherphotos: [
      'https://images.unsplash.com/photo-1578536892090-aecdaea1f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
  {
    truckname: 'Burrito Man',
    image:
      'https://images.unsplash.com/photo-1592422301197-39e67a71bc37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    location: { latitude: 33.4479, longitude: -112.0737 },
    foodkeywords: ['burrito', 'mexican'],
    otherphotos: [
      'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80',
      'https://images.unsplash.com/photo-1581866719788-dbde5e7f7ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
  {
    truckname: 'Pasta Man',
    image: 'https://images.unsplash.com/photo-1547567497-fa0a1720f457?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    location: { latitude: 33.4984, longitude: -111.9261 },
    foodkeywords: ['pasta', 'italian'],
    otherphotos: [
      'https://images.unsplash.com/photo-1570700258112-e259d3dbafb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
];

db.Truck.remove({})
  .then(() => db.Truck.collection.insertMany(truckSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
