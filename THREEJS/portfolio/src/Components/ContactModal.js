import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 export default function ContactModal(props) {
  return (
   
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hello Captain
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>We have news for you !</h4>
        <p>
         {props.ModalMsg}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='px-4 py-2 bg-dark text-light border border-0'>Close</Button>
      </Modal.Footer>
    </Modal>
   
  );
}