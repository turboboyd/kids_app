import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "test",
  bundledWebRuntime: false,
  webDir: "build",
  server: {
    androidScheme: "http",
    url: "http://192.168.178.21:3000",
    cleartext: true,
  },
};

export default config;
