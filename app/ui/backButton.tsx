'use client';
import Button from './button';
import { useRouter } from 'next/navigation';

export default function BackButton({ className = '' }) {
  const router = useRouter();
  const baseClasses = 'lg:block';
  const finalClasses = `${baseClasses} ${className}`;

  const handleBackClick = () => {
    if (typeof window !== 'undefined') {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push('/');
      }
    }
  };
  return (
    <Button
      icon={<i className="bi bi-arrow-left"></i>}
      iconPosition={'left'}
      onClick={handleBackClick}
      className={finalClasses}
    >
      Back
    </Button>
  );
}
