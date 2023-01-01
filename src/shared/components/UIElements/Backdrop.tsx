import ReactDOM from 'react-dom';

// import './Backdrop.css';

function Backdrop(props: any) {
  return ReactDOM.createPortal(
    <button
      type="button"
      className="backdrop"
      aria-label="back-drop"
      onClick={props.onClick}
    />,
    document.getElementById('backdrop-hook') as HTMLElement,
  );
}

export default Backdrop;
