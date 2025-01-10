import React from "react";
import { SafeAreaView } from "react-native";
import ContactPage from "./components/contacts/ContactPage";

const Main: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ContactPage />
    </SafeAreaView>
  );
};

export default Main;
