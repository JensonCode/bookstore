import { cn } from '@/utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'h-10 w-30 md:w-36 rounded-md p-2 max-md:text-sm',
        className
      )}
    >
      {children}
    </button>
  );
}
