import { getUser } from "./auth-client";

async function bootstrapData() {
  const res = await getUser();
  if (!res) {
    return { user: null };
  }
  const user = res.data;
  return user;
}

export { bootstrapData };
