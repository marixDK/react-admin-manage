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
  return (
    <div className='App'>
      <div>hhhhhhh</div>
      <div>啦啦啦啦啦</div>
    </div>
  );
}

export default App;
