import React from 'react';
import './button.css';

export interface IButton {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  [prop: string]: any;
}

const Button: React.FC<IButton> = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;