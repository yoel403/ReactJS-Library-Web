import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../../styles/components/modal.css"
import check from "../../assets/checked.png" 

const Checkedcomp = (props) => {
    const {button, modalTitle} = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Button className='modal-button editBG' onClick={handleShow}>
          {button}
        </Button>
  
        <Modal className='modal-wrapper' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalcheck'>
            <img src={check} alt="" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" className='footer-button' onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  )
}

export default Checkedcomp