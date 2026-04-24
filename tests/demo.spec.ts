import { test, expect } from "@playwright/test";
import { API } from "../helpers/api";

test("API demo by Zee.Hashmi - login + get user", async ({ request }) => {
  const author = "Zee.Hashmi";

  console.log(`\n Test Framework Author: ${author}\n`);

  const api = new API(request);

  const loginResponse = await api.login();
  expect(loginResponse.status()).toBe(200);

  const loginBody = await loginResponse.json();

  console.log(`👤 ${author} LOGIN RESPONSE:`, loginBody);

  const token = loginBody.accessToken;

  const userResponse = await api.getUser(1, token);
  expect(userResponse.status()).toBe(200);

  const userBody = await userResponse.json();

  console.log(`📦 ${author} USER RESPONSE:`, userBody);

  expect(userBody.id).toBe(1);
});