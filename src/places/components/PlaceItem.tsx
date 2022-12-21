import { TPlaceDetail } from 'shared/types/Place';
import React, { useContext, useState } from 'react';

import Button from '../../shared/components/FormElements/Button';
import {
  Card,
  Map,
  Modal,
  LoadingSpinner,
} from '../../shared/components/UIElements';
import { AppContext } from '../../shared/context/AppContext';
import './PlaceItem.css';
import useDeletePlace from '../../shared/hooks/useDeletePlace';

function PlaceItem(props: TPlaceDetail) {
  const { id, location, creator, address, title, image, description } = props;
  const ctx = useContext(AppContext);
  const [mapModal, setMapModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const { isLoading, mutateAsync: deletePlace } = useDeletePlace();

  const confirmDeleteHandler = async () => {
    setConfirmModal(false);
    await deletePlace({ pid: id, token: ctx.token });
  };

  return (
    <>
      <Modal
        show={mapModal}
        onCancel={() => setMapModal((prev) => !prev)}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <Button onClick={() => setMapModal((prev) => !prev)}>Close</Button>
        }
      >
        <div className="map-container">
          <Map center={location} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={confirmModal}
        onCancel={() => setConfirmModal((prev) => !prev)}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={() => setConfirmModal((prev) => !prev)}>
              CANCEL
            </Button>
            <Button dnager onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>Do you want to proceed and delete this place?</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img src={process.env.REACT_APP_ASSET_URL + image} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={() => setMapModal((prev) => !prev)}>
              VIEW ON MAP
            </Button>
            {ctx.userId === creator && (
              <>
                <Button to={`/places/${id}`}>EDIT</Button>
                <Button danger onClick={() => setConfirmModal((prev) => !prev)}>
                  DELETE
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
