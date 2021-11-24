import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "a33def4bb6e34b8b8fed8d03f3e8e1e0";
const token =
  "006a33def4bb6e34b8b8fed8d03f3e8e1e0IACVoL9Khw2Ye79n6lp/w290h+Ta8HK1pxR5S6tLDXsXawx+f9gAAAAAEACdnafAzVyfYQEAAQDNXJ9h";

export const config = { mode: "rtc", codec: "vp8", appId: appId,token: token  };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "test";
