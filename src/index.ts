import { env } from "@/common/utils/envConfig";
import { app, logger } from "@/server";

const server = app.listen(() => {
	const { NODE_ENV } = env;
	logger.info(`Server (${NODE_ENV}) running`);
});

const onCloseSignal = () => {
	logger.info("sigint received, shutting down");
	server.close(() => {
		logger.info("server closed");
		process.exit();
	});
	setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);
