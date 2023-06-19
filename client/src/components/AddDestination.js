import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { adddestination } from "../js/slice/destinationSlice";
import { useDispatch } from "react-redux";

function AddDestination({ el, ping, setping }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [dest, setdest] = useState({
    name: "",
    image: "",
    address: "",
    location: "",
    description: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        style={{ backgroundColor: "#9e0000", border: "none" }}
        onClick={handleShow}
      >
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Destination name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name "
                onChange={(e) => setdest({ ...dest, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Destination image</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter image"
                onChange={(e) => setdest({ ...dest, image: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Destination Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter address"
                onChange={(e) => setdest({ ...dest, address: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Destination Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter location "
                onChange={(e) => setdest({ ...dest, location: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Destination Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter description"
                onChange={(e) =>
                  setdest({ ...dest, description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(adddestination(dest));
              setping(!ping);
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddDestination;
