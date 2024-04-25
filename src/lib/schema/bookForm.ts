import { z } from 'zod';

export const bookFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Book Name is requied')
    .max(100, 'Book name is too long'),
  price: z.number().min(0, 'Book Price must be positive value'),
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
