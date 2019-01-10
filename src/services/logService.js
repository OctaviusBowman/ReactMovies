// import Raven from "raven-js";

function init() {
  // Raven.config("https://cc1dbaa0e89245aa91117b44055ad245@sentry.io/1364584", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  console.error(error);
  // Raven.captureException(error);
}

export default {
  init,
  log
};
