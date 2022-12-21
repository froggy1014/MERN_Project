import { TErrorModal } from 'shared/types/UI';
import Modal from './Modal';
import Button from '../FormElements/Button';

function ErrorModal(props: TErrorModal) {
  const { onClear, error } = props;
  return (
    <Modal
      onCancel={onClear}
      header="An Error Occurred!"
      show={!!error}
      footer={<Button onClick={onClear}>Okay</Button>}
    >
      <p>{error}</p>
    </Modal>
  );
}

export default ErrorModal;
