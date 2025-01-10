import React, { useState } from "react";
import { useWindowDimensions } from "react-native";

import { VStack } from "../ui/vstack";
import { HStack } from "../ui/hstack";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";
import { Box } from "../ui/box";

import ContactDetails from "./ContactDetails";
import WhoKnows from "./WhoKnows";

const tabs = [
  {
    title: "Contact Details",
    content: <ContactDetails />,
  },
  {
    title: "Who Knows",
    content: <WhoKnows />,
  },
  {
    title: "Last Activity",
    content: (
      <VStack>
        <Text size="lg">Last Activity</Text>
        {/* Add custom components here */}
      </VStack>
    ),
  },
];

const ContactsTabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeTabClassName =
    "border-b-2 border-blue-500 text-blue-500 font-bold  p-2";

  return (
    <VStack className="pt-5">
      <HStack space="md" className="justify-around">
        {tabs.map((tab, index) => (
          <Pressable key={index} onPress={() => setActiveTab(index)}>
            <Text
              className={activeTab === index ? activeTabClassName : " p-2"}
              size="md"
            >
              {tab.title}
            </Text>
          </Pressable>
        ))}
      </HStack>
      <Box>
        {tabs[activeTab].content} {/* Render the content of the active tab */}
      </Box>
    </VStack>
  );
};

export default ContactsTabView;
