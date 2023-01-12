import { useState } from 'react';
import './App.css';
import Review from './components/Review';
import Data from './Data';

function App() {
  const [review,setReview] = useState(Data);

  return (
    <main>
      <div className='title'>
        <h1>Our Reviews</h1>
        <div className='underline'></div>
      </div>
      
      <Review review={review}/>
    </main>
  );
}

export default App;
