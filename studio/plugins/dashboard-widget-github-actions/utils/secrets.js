import client from "part:@sanity/base/client";

export const fetchSecrets = async () => {
  const secrets = { accessToken: null };
  const results = await client.fetch('*[_id == "secrets.github"]');
  if (results.length > 0) {
    secrets.accessToken = results[0].accessToken ?? null;
  }
  return secrets;
};

export const saveSecrets = (accessToken) => {
  const doc = {
    _id: "secrets.github",
    _type: "github.accessToken",
    accessToken,
  };
  return client.createOrReplace(doc).then(() => {
    return {
      accessToken,
    };
  });
};
