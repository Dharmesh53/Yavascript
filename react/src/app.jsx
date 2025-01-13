import React, { useState } from "react";

const AutocompleteInput = ({ suggestions }) => {
  const [query, setQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  const handleInputChange = (event) => {
    const value = event.target.value
    setQuery(value)

    setFilteredSuggestions(() => {
      return suggestions.filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase())).slice(0, 10)
    })
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion)
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      {filteredSuggestions.length != suggestions.length && filteredSuggestions.map((suggest, index) => (
        <ul
          key={index}
          style={{
            border: "1px solid #ccc",
            overflowY: "auto",
            zIndex: 1,
            padding: 0,
            margin: 0,
            listStyleType: "none",
          }}
        >
          <li
            style={{
              cursor: "pointer",
              borderBottom: "1px solid #eee",
            }}
            onClick={() => handleSuggestionClick((suggest))}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f4f4f4")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
          >
            {suggest}
          </li>
        </ul>
      ))
      }
    </div>
  );
};

const App = () => {
  const array = [
    "Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple", "Strawberry", "Blueberry",
    "Raspberry", "Peach", "Pear", "Plum", "Kiwi", "Papaya", "Watermelon", "Cantaloupe",
    "Honeydew", "Cherry", "Apricot", "Fig", "Pomegranate", "Lemon", "Lime", "Coconut",
    "Avocado", "Tomato", "Carrot", "Potato", "Onion", "Garlic", "Ginger", "Cucumber",
    "Zucchini", "Eggplant", "Pumpkin", "Spinach", "Lettuce", "Kale", "Broccoli", "Cauliflower",
    "Cabbage", "Celery", "Mushroom", "Bell Pepper", "Chili", "Corn", "Peas", "Green Beans",
    "Asparagus", "Artichoke", "Brussels Sprouts", "Radish", "Turnip", "Beetroot", "Sweet Potato",
    "Yam", "Okra", "Bitter Gourd", "Squash", "Leek", "Parsley", "Cilantro", "Basil",
    "Mint", "Thyme", "Rosemary", "Oregano", "Dill", "Chives", "Bay Leaf", "Sage",
    "Cinnamon", "Vanilla", "Clove", "Nutmeg", "Cardamom", "Star Anise", "Black Pepper",
    "White Pepper", "Curry Powder", "Turmeric", "Saffron", "Paprika", "Chili Powder",
    "Mustard Seed", "Cumin", "Coriander", "Fenugreek", "Sesame", "Flaxseed", "Sunflower Seed",
    "Pumpkin Seed", "Walnut", "Almond", "Cashew", "Peanut", "Pecan", "Pistachio", "Hazelnut",
    "Macadamia", "Chestnut"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Autocomplete Input</h1>
      <AutocompleteInput suggestions={array} />


    </div>
  );
};

export default App;
