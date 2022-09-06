import getIt from "get-it";
import base from "get-it/lib/middleware/base";
import headers from "get-it/lib/middleware/headers";
import jsonResponse from "get-it/lib/middleware/jsonResponse";
import promise from "get-it/lib/middleware/promise";

const request = getIt([
  promise(),
  jsonResponse(),
  base("https://api.github.com"),
  headers({
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  }),
]);

export default request;
