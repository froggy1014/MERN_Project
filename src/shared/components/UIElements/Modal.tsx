import React, { FormEvent } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { IModal } from 'shared/types/UI';
import Backdrop from './Backdrop';
import './Modal.css';

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
    <div className="modal">
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={submitHandler}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
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
