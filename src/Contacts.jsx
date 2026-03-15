import { useState } from 'react';
import './App.css';

export default function Contacts() {
  // contact is an OBJECT
  const [contact, setContact] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
  });
  // data is an ARRAY of contacts
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: type === 'number' ? value /* keep as string */ : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation (optional)
    if (!contact.name?.trim()) return;

    // append new row
    if (editIndex !== null) {
      // update existing contact
      setData((prev) =>
        prev.map((item, i) => (i === editIndex ? { ...contact } : item))
      );
      setEditIndex(null);
    } else {
      setData((prev) => [...prev, contact]);
    }

    // reset form
    setContact({
      name: '',
      age: '',
      address: '',
      phone: '',
    });
  };

  const handleDelete = (itemToDelete) => {
    setData((prevItems) => prevItems.filter((item) => item !== itemToDelete));
  };

  const handleEdit = (itemToEdit, idx) => {
    setContact(itemToEdit);
    setEditIndex(idx);
  };
  const handleUpdate = () => {
    setData((prev) =>
      prev.map((item, i) => (i === editIndex ? { ...contact } : item))
    );
  };

  return (
    <>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div>
          Name:{' '}
          <input
            name="name"
            type="text"
            value={contact.name}
            placeholder="Enter name"
          />
        </div>
        <div>
          Age:{' '}
          <input
            name="age"
            type="number"
            value={contact.age}
            placeholder="Enter age"
          />
        </div>
        <div>
          Address:{' '}
          <input
            name="address"
            type="text"
            value={contact.address}
            placeholder="Enter address"
          />
        </div>
        <div>
          Phone:{' '}
          <input
            name="phone"
            type="text"
            value={contact.phone}
            placeholder="Enter phone"
          />
        </div>

        <button type="submit">
          {editIndex === null ? 'Submit' : 'Update'}
        </button>
      </form>

      <table border="1" cellPadding="6" style={{ marginTop: 12 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: '#666' }}>
                No contacts yet
              </td>
            </tr>
          ) : (
            data.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => handleEdit(item, idx)}>edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
