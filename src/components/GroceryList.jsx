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

  const handleChecked = (event) => {
    const id = event.target.id;
    const newPurchased = event.target.checked;

    const body = {
      records: [
        {
          id,
          fields: {
            Purchased: newPurchased,
          },
        },
      ],
    };

    try {
      fetch(groceryAirtableUrl, {
        method: 'PATCH', // We should use PATCH not POST because this is an update for specific values
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      // make the update in state here (after the PATCH request was successful) so we aren't reflecting changes that haven't happened
      const currentGroceryIndex = groceryList.findIndex(
        (item) => item.id === id
      );
      const updatedGroceryList = [...groceryList];
      updatedGroceryList[currentGroceryIndex] = {
        ...updatedGroceryList[currentGroceryIndex],
        fields: {
          ...updatedGroceryList[currentGroceryIndex].fields,
          Purchased: newPurchased,
        },
      };

      setGroceryList(updatedGroceryList);
    } catch (error) {
      console.log(error);
    }
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
              checked={grocery.fields.Purchased}
              onChange={handleChecked}
            />
            <label htmlFor={grocery.fields.Item}>{grocery.fields.Item}</label>
            {/* // <li key={grocery.id}>{grocery.fields.Item}</li> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
