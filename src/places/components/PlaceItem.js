import React, { useContext, useState } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import Map from '../../shared/components/UIElements/Map';
import Modal from '../../shared/components/UIElements/Modal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AppContext } from '../../shared/context/AppContext';
import './PlaceItem.css';
import useDeletePlace from '../../shared/hooks/useDeletePlace';

const PlaceItem = (props) => {
  const ctx = useContext(AppContext);
  const [mapModal, setMapModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const { isLoading, mutateAsync: deletePlace } = useDeletePlace();

  const confirmDeleteHandler = async () => {
    setConfirmModal(false);
    await deletePlace(props.id);
  };
  return (
    <React.Fragment>
      <Modal
        show={mapModal}
        onCencel={() => setMapModal(prev => !prev)}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={() => setMapModal(prev => !prev)}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinate} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={confirmModal}
        onCencel={() => setConfirmModal(prev=>!prev)}
        heaer="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={() => setConfirmModal(prev=>!prev)}>
              CANCEL
            </Button>
            <Button dnager onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you want to proceed and delete this place?</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={() => setMapModal(prev => !prev)}>
              VIEW ON MAP
            </Button>
            {ctx.userId === props.creatorId && (
              <>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button danger onClick={() => setConfirmModal(prev=>!prev)}>
                  DELETE
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
