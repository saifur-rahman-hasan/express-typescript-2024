"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/api/user/userRepository.ts
var userRepository_exports = {};
__export(userRepository_exports, {
  UserRepository: () => UserRepository,
  users: () => users
});
module.exports = __toCommonJS(userRepository_exports);
var users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 42,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1e3)
    // 5 days later
  },
  {
    id: 2,
    name: "Robert",
    email: "Robert@example.com",
    age: 21,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1e3)
    // 5 days later
  }
];
var UserRepository = class {
  async findAllAsync() {
    return users;
  }
  async findByIdAsync(id) {
    return users.find((user) => user.id === id) || null;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserRepository,
  users
});
//# sourceMappingURL=userRepository.js.map