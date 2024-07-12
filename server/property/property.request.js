// import { z } from 'zod';

// export const propertySchema = z.object({
//   contact: z.string()
//     .length(10, { message: 'Contact number must be exactly 10 digits' })
//     .regex(/^\d{10}$/, { message: 'Contact number must be numeric' }),
//   buildUpArea: z.number().nonnegative({ message: 'Build up area must be a non-negative number' }),
//   carpetArea: z.number().nonnegative({ message: 'Carpet area must be a non-negative number' }),
//   rent: z.number().nonnegative({ message: 'Rent must be a non-negative number' }),
// });