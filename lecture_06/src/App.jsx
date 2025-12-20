import Bouquet from "./components/Bouquet";
import Cartoon from "./components/Cartoons";
import Vegetables from "./components/Vegetables";

function App() {
  const cartoons = [
{
    id: 1,
    name: 'Mickey Mouse',
    superpower: 'Invisibility',
    magnitude: 1
  },
  {
    id: 2,
    name: 'Spongebob Squarepants',
    superpower: 'Super Strength',
    magnitude: 3
  },
  {
    id: 3,
    name: 'Bugs Bunny',
    superpower: 'Teleportation',
    magnitude: 9
  },
  {
    id: 4,
    name: 'Tom and Jerry',
    superpower: 'Intelligence',
    magnitude: 8
  },
  {
    id: 5,
    name: 'The Powerpuff Girls',
    superpower: 'Flight',
    magnitude: 10
  }
]

const vegetables = [
    {
      id: 1,
      name: 'Carrots',
      pickDate: '2023-03-25',
    },
    {
      id: 2,
      name: 'Broccoli',
      pickDate: '2023-03-30',
    },
    {
      id: 3,
      name: 'Peppers',
      pickDate: '2023-03-25',
    },
    {
      id: 4,
      name: 'Tomatoes',
      pickDate: '2023-03-27',
    },
    {
      id: 5,
      name: 'Ladies Finger',
      pickDate: '2023-03-30',
    },
  ]

const bouquet = [
  {
    id: 1,
    flowers: ['rose', 'lily', 'marigold'],
    totalFlowers: 9,
    price: 1400,
  },
  {
    id: 2,
    flowers: ['snapdragon', 'sunflower'],
    totalFlowers: 10,
    price: 3400,
  },
]

  return(
    <div>
      {/* <Cartoon cartoons={cartoons}/> */}
      <Vegetables vegetables = {vegetables}/>
      <Bouquet bouquet={bouquet}/>
    </div>
  )
}

export default App;



// newww
// Build a React component to display the flowers of a bouquet in an ordered list on the DOM which has a price above 2000. Pass data as prop.
// const bouquet = [
//   {
//     id: 1,
//     flowers: ['rose', 'lily', 'marigold'],
//     totalFlowers: 9,
//     price: 1400,
//   },
//   {
//     id: 2,
//     flowers: ['snapdragon', 'sunflower'],
//     totalFlowers: 10,
//     price: 3400,
//   },
// ]


// Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.
// const vegetables = [
//   {
//     id: 1,
//     name: 'Carrots',
//     pickDate: '2023-03-25',
//   },
//   {
//     id: 2,
//     name: 'Broccoli',
//     pickDate: '2023-03-30',
//   },
//   {
//     id: 3,
//     name: 'Peppers',
//     pickDate: '2023-03-25',
//   },
//   {
//     id: 4,
//     name: 'Tomatoes',
//     pickDate: '2023-03-27',
//   },
//   {
//     id: 5,
//     name: 'Ladies Finger',
//     pickDate: '2023-03-30',
//   },
// ]






// Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5. Data:
// const cartoons = [
// {
//     id: 1,
//     name: 'Mickey Mouse',
//     superpower: 'Invisibility',
//     magnitude: 1
//   },
//   {
//     id: 2,
//     name: 'Spongebob Squarepants',
//     superpower: 'Super Strength',
//     magnitude: 3
//   },
//   {
//     id: 3,
//     name: 'Bugs Bunny',
//     superpower: 'Teleportation',
//     magnitude: 9
//   },
//   {
//     id: 4,
//     name: 'Tom and Jerry',
//     superpower: 'Intelligence',
//     magnitude: 8
//   },
//   {
//     id: 5,
//     name: 'The Powerpuff Girls',
//     superpower: 'Flight',
//     magnitude: 10
//   }
// ]