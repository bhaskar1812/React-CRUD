import { useState, useEffect, use } from 'react';
import './App.css';
// import Contacts from './Contacts';
const list = [
  {
    id: 4,
    firstName: 'Paul',
    middleInitial: 'A',
    lastName: 'Thompson',
    birthDt: '2006-11-01',
    location: 'ireland',
  },
  {
    id: 5,
    firstName: 'oliVia',
    middleInitial: 'A',
    lastName: 'broWn',
    birthDt: '1999-01-01',
    location: 'new york',
  },
  {
    id: 9,
    firstName: 'EliZabeth',
    middleInitial: 'A',
    lastName: 'Booth',
    birthDt: '1995-01-01',
    location: 'texas',
  },
  {
    id: 10,
    firstName: 'Violet',
    middleInitial: 'A',
    lastName: 'Williams',
    birthDt: '2000-01-01',
    location: 'rome',
  },
  {
    id: 11,
    firstName: 'Scarlett',
    middleInitial: 'A',
    lastName: 'Booth',
    birthDt: '2021-01-01',
    location: 'paris',
  },
  {
    id: 12,
    firstName: 'NoAh',
    middleInitial: 'A',
    lastName: 'Brown',
    birthDt: '1996-10-01',
    location: 'paris',
  },
  {
    id: 13,
    firstName: 'Theodore',
    middleInitial: 'A',
    lastName: 'Miller',
    birthDt: '1996-09-01',
    location: 'ireland',
  },
];

function DriverList() {
  const [query, setQuery] = useState('');
  const [visited, setVisited] = useState(Boolean);
  // const unique = [
  //   ...new Map(list.map((item) => [JSON.stringify(item), item])).values(),
  // ];
  //console.log('xxxxxxxxx', unique);

  const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const filterList = list
    .filter((item) => item.location !== 'texas')
    .map((item) => ({
      ...item,
      firstName: cap(item.firstName),
      lastName: cap(item.lastName),
      location: cap(item.location),
      age: new Date().getFullYear() - new Date(item.birthDt).getFullYear(),
    }))
    .filter((item) => item.age > 18)
    .sort((a, b) => a.age - b.age);

  const formatted = filterList.filter((item) =>
    item.firstName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>DriverList</h1>
      Search: <input onChange={(e) => setQuery(e.target.value)} type="text" />
      <br />
      <table border="1px">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Visited</th>
          </tr>
        </thead>
        <tbody>
          {formatted.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.location}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DriverList;
