import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import Main from "./Main";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Main />
    </GluestackUIProvider>
  );
}
