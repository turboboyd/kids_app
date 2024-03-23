import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "kids_app",
  webDir: "out",
  server: {
    url: "http://192.168.1.2:3000",
    cleartext: true,
    androidScheme: "https",
  },
};

export default config;
