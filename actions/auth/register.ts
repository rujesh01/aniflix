"use server";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas/schemas";
import { z } from "zod";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateForm = RegisterSchema.safeParse(values);

  if (!validateForm.success) {
    return { error: "some thing went wrong" };
  }

  const { email, password, username } = validateForm.data;

 await db.user.create({
    data: {
      email,
      password,
      username,
    },
  });
};
