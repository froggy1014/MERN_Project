import { FormEvent } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { IModal } from 'shared/types/UI';
import Backdrop from './Backdrop';

const ModalOverLay = (props: Omit<IModal, 'onCancel' | 'show'>) => {
  const {
    headerClass,
    header,
    footer,
    footerClass,
    contentClass,
    children,
    onSubmit,
  } = props;

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) onSubmit();
  };

  const content = (
    <div className="modal md:left-[calc(50% - 20rem)] md:w-160">
      <header
        className={`w-full px-4 py-2 bg-shyGreen-200 text-black ${headerClass}`}
      >
        <h2 className="m-2">{header}</h2>
      </header>
      <form onSubmit={submitHandler}>
        <div className={`px-4 py-2 ${contentClass}`}>{children}</div>
        <footer className={`px-4 py-2 mt-4 ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-hook') as HTMLElement,
  );
};

function Modal(props: IModal) {
  const {
    onCancel,
    show,
    headerClass,
    header,
    footer,
    footerClass,
    contentClass,
    onSubmit,
    children,
  } = props;
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        unmountOnExit
        mountOnEnter
        timeout={200}
        classNames="modal"
      >
        <ModalOverLay
          headerClass={headerClass}
          header={header}
          footer={footer}
          footerClass={footerClass}
          contentClass={contentClass}
          onSubmit={onSubmit}
        >
          {children}
        </ModalOverLay>
      </CSSTransition>
    </>
  );
}

export default Modal;
