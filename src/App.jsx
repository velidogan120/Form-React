import React from 'react';
import DynamicForm from './Components/DynamicForm';
import formData from '../Data/data.json';

function App() {
  return (
    <div className="App">
      <DynamicForm formData={formData.data[0]} cms={formData.cms} />
    </div>
  );
}

export default App;
