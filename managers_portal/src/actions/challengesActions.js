"use server";

import { revalidatePath } from "next/cache";

export async function removeProduct(formData) {
  const id = formData.get("productId"); // get id from form data
  await deleteProduct(id);
  revalidatePath("/edit");
}
