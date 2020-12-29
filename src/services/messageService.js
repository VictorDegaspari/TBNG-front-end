import { http } from "./config";

export default {
  fetchMessages: () => {
    return http.get("members" + "/");
  },
};
