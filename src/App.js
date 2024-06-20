import React, { Suspense } from 'react';
import './App.css';
// import Loader from 'react-loader-spinner'
import { Discuss } from 'react-loader-spinner'

// Lazy:
const AboutUs = React.lazy(() => import('./components/AboutUs'))
const Packages = React.lazy(() => import('./components/Packages'))

function App() {
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
        {/* <Suspense fallback={<h1>Loading...</h1>}> */}
        <Suspense fallback={(<Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="discuss-loading"
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />)}>
          <AboutUs />
          <Packages />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
