import { cn } from '@/utils/cn';

interface ButtonProps extends React.BaseHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children }: ButtonProps) {
  return (
    <button className={cn('h-12 w-24 md:w-36 bg-white rounded-md p-2')}>
      {children}
    </button>
  );
}
