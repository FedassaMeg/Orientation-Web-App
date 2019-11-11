import { getUser, authenticated } from "./auth-client";

async function bootstrapData() {
  const res = await getUser();
  if (!res) {
    return { user: null };
  }
  const user = res.data;

  const tokenRes = await authenticated();
  let isAuthenticated;
  if (tokenRes.status === 200) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  return { user, isAuthenticated };
}

export { bootstrapData };
