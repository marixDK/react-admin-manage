import React, { useEffect } from 'react';
import { getData } from './api/login';

const fetchData = async () => {
  const res = await getData();
  console.log(res);
};

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  return <div className='App'></div>;
}

export default App;
