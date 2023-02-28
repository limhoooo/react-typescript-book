import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Book from './pages/Book';
import Edit from './pages/Edit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import { ErrorBoundary } from 'react-error-boundary'
import Error from './pages/Error';
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/add' element={<Add />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
