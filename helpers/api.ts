import { APIRequestContext } from "@playwright/test";

export class API {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // LOGIN (POST)
  async login() {
    return await this.request.post("https://dummyjson.com/auth/login", {
      data: {
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  // GET USER
  async getUser(userId: number, token?: string) {
    return await this.request.get(
      `https://dummyjson.com/users/${userId}`,
      {
        headers: token
          ? {
              Authorization: `Bearer ${token}`
            }
          : {}
      }
    );
  }
}