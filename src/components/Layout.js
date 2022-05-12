import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
