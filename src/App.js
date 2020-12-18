import React from 'react';
import './App.css';
import Search from './Search';
import List from './List';


function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

    // useEffect(() => {
    // });

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

  return (
    <div>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <Search search={searchTerm} onSearch={handleSearch} />
      <List />
    </div>
  );
}

export default App;