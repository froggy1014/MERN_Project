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
        contentClass="p-0"
        footerClass="text-right"
        footer={
          <Button onClick={() => setMapModal((prev) => !prev)}>Close</Button>
        }
      >
        <div className="h-60 w-full">
          <Map center={location} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={confirmModal}
        onCancel={() => setConfirmModal((prev) => !prev)}
        header="Are you sure?"
        footerClass="text-right"
        footer={
          <>
            <Button inverse onClick={() => setConfirmModal((prev) => !prev)}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>Do you want to proceed and delete this place?</p>
      </Modal>
      <li className="my-4 mx-0">
        <Card className="p-0">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="w-full h-50 mr-6 md:h-80">
            <img
              className="w-full h-full object-cover"
              src={process.env.REACT_APP_ASSET_URL + image}
              alt={title}
            />
          </div>
          <div className="flex flex-col justify-center items-center mb-2">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="p-4 text-center border-t-[1px] border-solid border-gray-200">
            <Button
              className="m-2"
              inverse
              onClick={() => setMapModal((prev) => !prev)}
            >
              VIEW ON MAP
            </Button>
            {ctx.userId === creator && (
              <>
                <Button className="m-2" to={`/places/${id}`}>
                  EDIT
                </Button>
                <Button
                  className="m-2"
                  danger
                  onClick={() => setConfirmModal((prev) => !prev)}
                >
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
