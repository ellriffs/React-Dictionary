import { useState } from 'react';
import axios from 'axios';
import '../Styles/App.css';
import Search from './Search';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [definition, setDefinition] = useState([]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  async function getSearch() {
    const endpoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
    const response = await axios.get(`${endpoint}`);
    console.log(response.data);
    setDefinition(response.data);
  }

  return (
    <div className="App">
      <h1 className="app-title">THE OPEN BOOK</h1>
      <h3 className="sub-title">THE ONLINE QUICK FIRE DICTIONARY</h3>
      <Search
        definition={definition}
        getSearch={getSearch}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
