import React from 'react'

// import component
import Cardcomp from '../../components/Card'
import Carousel from '../../components/Carousel'
import Carouseltab from '../../components/Carousel'
import Navbarnavigator from '../../components/Navbar'
import Sidebarcomp from '../../components/Sidebar'
import "../../styles/pages/home.css"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import photo
import { books } from '../../Data'

const Hometab = () => {
  return (
      <div className='Wrapper-body d-flex Container Fluid'>
        <Sidebarcomp/> 
        <div className="container-body w-100">
          <Navbarnavigator/>
          <Carousel/>
            <Row>
              <h2>List Book</h2>
            </Row>
            <Row>
                <div className='list-book d-flex justify-content-center'>
                  {books.map((book) => {
                    return <Cardcomp 
                    image = {book.image}
                    title={book.title}
                    subtitle={book.sinopsis}
                    url={book.urlImage}
                    bookId = {book.bookId}
                  />;
                  })}
                </div>
            </Row>
        </div>
    </div>
    
    
  )
}

export default Hometab