import { test, expect } from "@playwright/test";

test("POST login to DummyJSON API", async ({ request }) => {
  const response = await request.post("https://dummyjson.com/auth/login", {
    data: {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30
    },
    headers: {
      "Content-Type": "application/json"
    }
  });

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  console.log("Login Response:", body);

  // Validate token exists
  expect(body.accessToken).toBeDefined();
  expect(body.refreshToken).toBeDefined();

  // Validate user details
  expect(body.username).toBe("emilys");
  expect(body.email).toContain("@");
});