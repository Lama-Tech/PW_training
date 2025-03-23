import { test, expect, request } from "@playwright/test";
import { api, userID } from "../helpers/data";
import "dotenv/config";

let token = "string";

test.skip("GET api call", async ({ request }) => {
  const response = await request.get(api + "BookStore/v1/Books");
  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status()).toBe(200);
  expect(responseBody.books).toBeDefined();
  expect(Array.isArray(responseBody.books)).toBe(true);

  const firstBook = responseBody.books[0];
  expect(firstBook).toBeDefined();
  expect(firstBook.title).toBe("Git Pocket Guide");
});

test("Create User", async ({ request }) => {
  const response = await request.post(api + "/Account/v1/User", {
    data: {
      userName: process.env.USER_API,
      password: process.env.PASSWORD_API,
    },
  });
  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status()).toBe(201);
});

test("Generate Token", async ({ request }) => {
  const response = await request.post(api + "/Account/v1/GenerateToken", {
    data: {
      userName: process.env.USER_API,
      password: process.env.PASSWORD_API,
    },
  });
  const responseBody = await response.json();
  token = responseBody.token;
  expect(response.status()).toBe(200);
  console.log(responseBody);
});

test("Get User", async ({ request }) => {
  const response = await request.post(
    `${api}/Account/v1/Authorized/${userID}`,
    {
      data: {
        Authorization: "Bearer" + token,
      },
    }
  );
  const responseBody = await response.json();
 console.log
});
