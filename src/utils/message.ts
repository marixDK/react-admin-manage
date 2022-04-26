import { message } from "antd";

const infoMessage = (msg: string, duration = 3) => {
  message.success(msg, duration);
};

const successMessage = (msg: string, duration = 3) => {
  message.success(msg, duration);
};

const errorMessage = (msg: string, duration = 3) => {
  message.error(msg, duration);
};

const warningMessage = (msg: string, duration = 3) => {
  message.warning(msg, duration);
};

export { infoMessage, successMessage, errorMessage, warningMessage };
