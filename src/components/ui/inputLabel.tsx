import { cn } from '@/utils/cn';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const InputLabel = ({ children, ...props }: LabelProps) => {
  return (
    <label
      className='font-semibold text-gray-800 py-1'
      htmlFor={props.htmlFor}
    >
      {children}
    </label>
  );
};
