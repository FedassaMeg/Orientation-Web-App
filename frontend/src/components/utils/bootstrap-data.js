import { getUser } from "./auth-client";

async function bootstrapData() {
  const data = await getUser();
  if (!data) {
    return { user: null };
  }
  const { user } = data;
  return {
    user
  };
}

export { bootstrapData };
