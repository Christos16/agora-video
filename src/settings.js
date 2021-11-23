import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "a33def4bb6e34b8b8fed8d03f3e8e1e0";
const token =
  "006a33def4bb6e34b8b8fed8d03f3e8e1e0IAD5iurOuzio2r3IAdRryG13IkQgyXBDxc7NPFDgo+Pgr2TNKL8AAAAAEACdnafADGmeYQEAAQAMaZ5h";

export const config = { mode: "rtc", codec: "vp8", appId: appId,token: token  };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
