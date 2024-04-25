import { z } from 'zod';

export const bookFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Book Name is requied')
    .max(100, 'Book name is too long'),
  price: z.coerce.number().min(1, 'Book Price must be a positive value'),
  category: z
    .string()
    .min(1, 'Book Category is requied')
    .max(100, 'Book Category is too long'),
  description: z
    .string()
    .min(1, 'Book Description is requied')
    .max(2000, 'Book Description is too long'),
});

export type bookFormData = z.infer<typeof bookFormSchema>;

type FormInput = {
  name: keyof bookFormData;
  label: string;
  type: 'text' | 'number';
};

export const bookFormInputs: FormInput[] = [
  {
    name: 'category',
    label: 'Book Category',
    type: 'text',
  },
  {
    name: 'name',
    label: 'Book Name',
    type: 'text',
  },
  {
    name: 'price',
    label: 'Unit Price',
    type: 'number',
  },
];
