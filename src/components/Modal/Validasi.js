import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../../styles/components/modal.css"
import check from "../../assets/checked.png" 
import Checkedcomp from './checked';

const Validasi = (props) => {
    const {button, modalTitle, modalbody} = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Button className='modal-button' onClick={handleShow}>
          {button}
        </Button>
  
        <Modal className='modal-wrapper' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalcheck'>
            {modalbody}
          </Modal.Body>
          <Modal.Footer>
            <Checkedcomp button="Ya" modalTitle="Success"/>
          </Modal.Footer>
        </Modal>
      </>
  )
}

export default Validasi