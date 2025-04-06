"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/api/user/userController.ts
var userController_exports = {};
__export(userController_exports, {
  userController: () => userController
});
module.exports = __toCommonJS(userController_exports);

// src/api/user/userService.ts
var import_http_status_codes6 = require("http-status-codes");

// src/api/user/userRepository.ts
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

// src/common/models/serviceResponse.ts
var import_http_status_codes = require("http-status-codes");
var import_zod = require("zod");
var ServiceResponse = class _ServiceResponse {
  success;
  message;
  responseObject;
  statusCode;
  constructor(success, message, responseObject, statusCode) {
    this.success = success;
    this.message = message;
    this.responseObject = responseObject;
    this.statusCode = statusCode;
  }
  static success(message, responseObject, statusCode = import_http_status_codes.StatusCodes.OK) {
    return new _ServiceResponse(true, message, responseObject, statusCode);
  }
  static failure(message, responseObject, statusCode = import_http_status_codes.StatusCodes.BAD_REQUEST) {
    return new _ServiceResponse(false, message, responseObject, statusCode);
  }
};
var ServiceResponseSchema = (dataSchema) => import_zod.z.object({
  success: import_zod.z.boolean(),
  message: import_zod.z.string(),
  responseObject: dataSchema.optional(),
  statusCode: import_zod.z.number()
});

// src/server.ts
var import_cors = __toESM(require("cors"));
var import_express4 = __toESM(require("express"));
var import_helmet = __toESM(require("helmet"));
var import_pino = require("pino");

// src/api-docs/openAPIRouter.ts
var import_express3 = __toESM(require("express"));
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));

// src/api-docs/openAPIDocumentGenerator.ts
var import_zod_to_openapi4 = require("@asteasolutions/zod-to-openapi");

// src/api/healthCheck/healthCheckRouter.ts
var import_zod_to_openapi = require("@asteasolutions/zod-to-openapi");
var import_express = __toESM(require("express"));
var import_zod2 = require("zod");

// src/api-docs/openAPIResponseBuilders.ts
var import_http_status_codes2 = require("http-status-codes");
function createApiResponse(schema, description, statusCode = import_http_status_codes2.StatusCodes.OK) {
  return {
    [statusCode]: {
      description,
      content: {
        "application/json": {
          schema: ServiceResponseSchema(schema)
        }
      }
    }
  };
}

// src/common/utils/httpHandlers.ts
var import_http_status_codes3 = require("http-status-codes");
var handleServiceResponse = (serviceResponse, response) => {
  return response.status(serviceResponse.statusCode).send(serviceResponse);
};
var validateRequest = (schema) => (req, res, next) => {
  try {
    schema.parse({ body: req.body, query: req.query, params: req.params });
    next();
  } catch (err) {
    const errorMessage = `Invalid input: ${err.errors.map((e) => e.message).join(", ")}`;
    const statusCode = import_http_status_codes3.StatusCodes.BAD_REQUEST;
    const serviceResponse = ServiceResponse.failure(errorMessage, null, statusCode);
    return handleServiceResponse(serviceResponse, res);
  }
};

// src/api/healthCheck/healthCheckRouter.ts
var healthCheckRegistry = new import_zod_to_openapi.OpenAPIRegistry();
var healthCheckRouter = import_express.default.Router();
healthCheckRegistry.registerPath({
  method: "get",
  path: "/health-check",
  tags: ["Health Check"],
  responses: createApiResponse(import_zod2.z.null(), "Success")
});
healthCheckRouter.get("/", (_req, res) => {
  const serviceResponse = ServiceResponse.success("Service is healthy", null);
  return handleServiceResponse(serviceResponse, res);
});

// src/api/user/userRouter.ts
var import_zod_to_openapi3 = require("@asteasolutions/zod-to-openapi");
var import_express2 = __toESM(require("express"));
var import_zod5 = require("zod");

// src/api/user/userModel.ts
var import_zod_to_openapi2 = require("@asteasolutions/zod-to-openapi");
var import_zod4 = require("zod");

// src/common/utils/commonValidation.ts
var import_zod3 = require("zod");
var commonValidations = {
  id: import_zod3.z.string().refine((data) => !Number.isNaN(Number(data)), "ID must be a numeric value").transform(Number).refine((num2) => num2 > 0, "ID must be a positive number")
  // ... other common validations
};

// src/api/user/userModel.ts
(0, import_zod_to_openapi2.extendZodWithOpenApi)(import_zod4.z);
var UserSchema = import_zod4.z.object({
  id: import_zod4.z.number(),
  name: import_zod4.z.string(),
  email: import_zod4.z.string().email(),
  age: import_zod4.z.number(),
  createdAt: import_zod4.z.date(),
  updatedAt: import_zod4.z.date()
});
var GetUserSchema = import_zod4.z.object({
  params: import_zod4.z.object({ id: commonValidations.id })
});

// src/api/user/userRouter.ts
var userRegistry = new import_zod_to_openapi3.OpenAPIRegistry();
var userRouter = import_express2.default.Router();
userRegistry.register("User", UserSchema);
userRegistry.registerPath({
  method: "get",
  path: "/users",
  tags: ["User"],
  responses: createApiResponse(import_zod5.z.array(UserSchema), "Success")
});
userRouter.get("/", userController.getUsers);
userRegistry.registerPath({
  method: "get",
  path: "/users/{id}",
  tags: ["User"],
  request: { params: GetUserSchema.shape.params },
  responses: createApiResponse(UserSchema, "Success")
});
userRouter.get("/:id", validateRequest(GetUserSchema), userController.getUser);

// src/api-docs/openAPIDocumentGenerator.ts
function generateOpenAPIDocument() {
  const registry = new import_zod_to_openapi4.OpenAPIRegistry([healthCheckRegistry, userRegistry]);
  const generator = new import_zod_to_openapi4.OpenApiGeneratorV3(registry.definitions);
  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Swagger API"
    },
    externalDocs: {
      description: "View the raw OpenAPI Specification in JSON format",
      url: "/swagger.json"
    }
  });
}

// src/api-docs/openAPIRouter.ts
var openAPIRouter = import_express3.default.Router();
var openAPIDocument = generateOpenAPIDocument();
openAPIRouter.get("/swagger.json", (_req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(openAPIDocument);
});
openAPIRouter.use("/", import_swagger_ui_express.default.serve, import_swagger_ui_express.default.setup(openAPIDocument));

// src/common/middleware/errorHandler.ts
var import_http_status_codes4 = require("http-status-codes");
var unexpectedRequest = (_req, res) => {
  res.sendStatus(import_http_status_codes4.StatusCodes.NOT_FOUND);
};
var addErrorToRequestLog = (err, _req, res, next) => {
  res.locals.err = err;
  next(err);
};
var errorHandler_default = () => [unexpectedRequest, addErrorToRequestLog];

// src/common/middleware/rateLimiter.ts
var import_express_rate_limit = require("express-rate-limit");

// src/common/utils/envConfig.ts
var import_dotenv = __toESM(require("dotenv"));
var import_envalid = require("envalid");
import_dotenv.default.config();
var env = (0, import_envalid.cleanEnv)(process.env, {
  NODE_ENV: (0, import_envalid.str)({ devDefault: (0, import_envalid.testOnly)("test"), choices: ["development", "production", "test"] }),
  HOST: (0, import_envalid.host)({ devDefault: (0, import_envalid.testOnly)("localhost") }),
  PORT: (0, import_envalid.port)({ devDefault: (0, import_envalid.testOnly)(3e3) }),
  CORS_ORIGIN: (0, import_envalid.str)({ devDefault: (0, import_envalid.testOnly)("http://localhost:3000") }),
  COMMON_RATE_LIMIT_MAX_REQUESTS: (0, import_envalid.num)({ devDefault: (0, import_envalid.testOnly)(1e3) }),
  COMMON_RATE_LIMIT_WINDOW_MS: (0, import_envalid.num)({ devDefault: (0, import_envalid.testOnly)(1e3) })
});

// src/common/middleware/rateLimiter.ts
var rateLimiter = (0, import_express_rate_limit.rateLimit)({
  legacyHeaders: true,
  limit: env.COMMON_RATE_LIMIT_MAX_REQUESTS,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  windowMs: 15 * 60 * env.COMMON_RATE_LIMIT_WINDOW_MS,
  keyGenerator: (req) => req.ip
});
var rateLimiter_default = rateLimiter;

// src/common/middleware/requestLogger.ts
var import_node_crypto = require("crypto");
var import_http_status_codes5 = require("http-status-codes");
var import_pino_http = require("pino-http");
var requestLogger = (options) => {
  const pinoOptions = {
    enabled: env.isProduction,
    customProps,
    redact: [],
    genReqId,
    customLogLevel,
    customSuccessMessage,
    customReceivedMessage: (req) => `request received: ${req.method}`,
    customErrorMessage: (_req, res) => `request errored with status code: ${res.statusCode}`,
    customAttributeKeys,
    ...options
  };
  return [responseBodyMiddleware, (0, import_pino_http.pinoHttp)(pinoOptions)];
};
var customAttributeKeys = {
  req: "request",
  res: "response",
  err: "error",
  responseTime: "timeTaken"
};
var customProps = (req, res) => ({
  request: req,
  response: res,
  error: res.locals.err,
  responseBody: res.locals.responseBody
});
var responseBodyMiddleware = (_req, res, next) => {
  const isNotProduction = !env.isProduction;
  if (isNotProduction) {
    const originalSend = res.send;
    res.send = (content) => {
      res.locals.responseBody = content;
      res.send = originalSend;
      return originalSend.call(res, content);
    };
  }
  next();
};
var customLogLevel = (_req, res, err) => {
  if (err || res.statusCode >= import_http_status_codes5.StatusCodes.INTERNAL_SERVER_ERROR) return "error" /* Error */;
  if (res.statusCode >= import_http_status_codes5.StatusCodes.BAD_REQUEST) return "warn" /* Warn */;
  if (res.statusCode >= import_http_status_codes5.StatusCodes.MULTIPLE_CHOICES) return "silent" /* Silent */;
  return "info" /* Info */;
};
var customSuccessMessage = (req, res) => {
  if (res.statusCode === import_http_status_codes5.StatusCodes.NOT_FOUND) return (0, import_http_status_codes5.getReasonPhrase)(import_http_status_codes5.StatusCodes.NOT_FOUND);
  return `${req.method} completed`;
};
var genReqId = (req, res) => {
  const existingID = req.id ?? req.headers["x-request-id"];
  if (existingID) return existingID;
  const id = (0, import_node_crypto.randomUUID)();
  res.setHeader("X-Request-Id", id);
  return id;
};
var requestLogger_default = requestLogger();

// src/server.ts
var logger = (0, import_pino.pino)({ name: "server start" });
var app = (0, import_express4.default)();
app.set("trust proxy", true);
app.use(import_express4.default.json());
app.use(import_express4.default.urlencoded({ extended: true }));
app.use((0, import_cors.default)({ origin: env.CORS_ORIGIN, credentials: true }));
app.use((0, import_helmet.default)());
app.use(rateLimiter_default);
app.use(requestLogger_default);
app.use("/health-check", healthCheckRouter);
app.use("/users", userRouter);
app.use(openAPIRouter);
app.use(errorHandler_default());

// src/api/user/userService.ts
var UserService = class {
  userRepository;
  constructor(repository = new UserRepository()) {
    this.userRepository = repository;
  }
  // Retrieves all users from the database
  async findAll() {
    try {
      const users2 = await this.userRepository.findAllAsync();
      if (!users2 || users2.length === 0) {
        return ServiceResponse.failure("No Users found", null, import_http_status_codes6.StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success("Users found", users2);
    } catch (ex) {
      const errorMessage = `Error finding all users: $${ex.message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving users.",
        null,
        import_http_status_codes6.StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  // Retrieves a single user by their ID
  async findById(id) {
    try {
      const user = await this.userRepository.findByIdAsync(id);
      if (!user) {
        return ServiceResponse.failure("User not found", null, import_http_status_codes6.StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success("User found", user);
    } catch (ex) {
      const errorMessage = `Error finding user with id ${id}:, ${ex.message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure("An error occurred while finding user.", null, import_http_status_codes6.StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
};
var userService = new UserService();

// src/api/user/userController.ts
var UserController = class {
  getUsers = async (_req, res) => {
    const serviceResponse = await userService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };
  getUser = async (req, res) => {
    const id = Number.parseInt(req.params.id, 10);
    const serviceResponse = await userService.findById(id);
    return handleServiceResponse(serviceResponse, res);
  };
};
var userController = new UserController();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userController
});
//# sourceMappingURL=userController.js.map