import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(2, {message: "aldkfjalskdfj"}).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at " })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
});
