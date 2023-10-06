import Header from './Header'
import Content from './Content';
import { useEffect, useState } from 'react';
function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com';

  const [reqType, setReqType] = useState('users');

  const [items, setItems] = useState([] as any[]);

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`);
        if (!response.ok) throw new Error('Error: Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error: any) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, [reqType]);

  return (
    <div className="App">
      <Header reqType={reqType} setReqType={setReqType} />
      {isLoading && <p>Loading...</p>}
      {!fetchError && !isLoading &&
        <Content items={items} />
      }
    </div>
  );
}

export default App;
