import React from 'react';
import { Navbar } from './Components/Navbar/navbar.js';
import { Home } from './Components/Home/Home.js'
import { SpecialList } from './Content/SpecialList/SpecialList.js';
import { History } from './Components/History/History.js';
import { MenuList } from './Content/MenuList/MenuList.js';
import { ImagesGallery } from './Components/ImagesGallery/ImagesGallery.js';
import { ContactList } from './Content/ContactList/ContactList.js';
import { Footer } from './Components/Footer/Footer.js';

function App() {

  return (
    <div className="container-fluid">
      <Navbar />
      <Home />
      <SpecialList />
      <History />
      <MenuList />
      <ImagesGallery />
      <ContactList />
      <Footer />
    </div>
  );
}

export default App;
