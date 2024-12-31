import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  icon,
  iconPosition = 'left',
  href,
  className = '',
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses =
    'flex items-center justify-center gap-2 px-2 border border-green-700 py-2 md:px-4 md:py-2 text-brand-500 bg-dark hover:bg-brand-800 hover:text-white transition-all ease-in-out duration-300 cursor-pointer';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const finalClasses = `${baseClasses} ${
    disabled ? disabledClasses : ''
  } ${className}`;

  const Content = () => (
    <>
      {icon && iconPosition === 'left' && (
        <span className="text-lg">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="text-sm lg:text-lg">{icon}</span>
      )}
    </>
  );

  if (href) {
    // Button as a next Link
    return (
      <Link href={href} legacyBehavior passHref>
        <a
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          className={finalClasses}
        >
          <Content />
        </a>
      </Link>
    );
  }
  return (
    <button
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <Content />
    </button>
  );
}
