type runningEnvironmentType = "PRODUCTION" | "DEVELOPMENT";
const runningEnvironment = "DEVELOPMENT" as runningEnvironmentType;
const localHostBackendAddress = "http://localhost:5006";
const onlineBackendAddress = "https://bus-ticket-backend-zeta.vercel.app";
export const backendAddress =
  runningEnvironment === "DEVELOPMENT"
    ? localHostBackendAddress
    : onlineBackendAddress;
export const localStorageKeyname = "bus-ticket-ar7";
