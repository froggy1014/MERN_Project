import { Link } from 'react-router-dom';
import { IButton } from 'shared/types/Form';

function Button(props: Partial<IButton>) {
  const { inverse, href, size, children, to, danger, type, onClick, disabled } =
    props;
  if (href) {
    return (
      <a
        className={`button text-${size || 'default'} ${inverse && 'inverse'} ${
          danger && 'danger'
        }`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        // exact={exact}
        className={`button text-${size || 'default'} ${inverse && 'inverse'} ${
          danger && 'danger'
        }`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`button text-${size || 'default'} ${inverse && 'inverse'} ${
        danger && 'danger'
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
