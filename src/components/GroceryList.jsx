import React, { useEffect, useState } from 'react';

const groceryAirtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Groceries`;

export const GroceryList = () => {
  const [groceryList, setGroceryList] = useState([]);
  useEffect(() => {
    fetch(groceryAirtableUrl, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setGroceryList(data.records));
  }, []);

  const handleChecked = () => {
    // to be continued!!....
    fetch(groceryAirtableUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      //   figure out what goes in the body!
      body: JSON.stringify(),
    });
  };

  return (
    <div>
      <h1>Grocery List!</h1>
      <ul>
        {groceryList.map((grocery) => (
          <li key={grocery.id}>
            <input
              type="checkbox"
              id={grocery.id}
              name={grocery.fields.Item}
              value={grocery.fields.Purchased}
              checked={grocery.fields.Purchased}
            ></input>
            <label for={grocery.fields.Item}>{grocery.fields.Item}</label>
            {/* // <li key={grocery.id}>{grocery.fields.Item}</li> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
