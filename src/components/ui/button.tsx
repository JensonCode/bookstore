import { cn } from '@/utils/cn';

interface ButtonProps extends React.BaseHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        className,
        'h-10 w-30 md:w-36 rounded-md p-2 max-md:text-sm'
      )}
    >
      {children}
    </button>
  );
}
