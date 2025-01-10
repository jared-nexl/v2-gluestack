import React from "react";
import { Center } from "../ui/center";
import { Text } from "../ui/text";
import { Avatar, AvatarFallbackText, AvatarImage } from "../ui/avatar";
import { VStack } from "../ui/vstack";
import { HStack } from "../ui/hstack";
import ContactsTabView from "./ContactsTabView";

const ContactPage: React.FC = () => {
  return (
    <VStack>
      <Center className="pt-10">
        <VStack space="xs" className="items-center">
          <Avatar size="xl">
            <AvatarFallbackText>Sam W</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          </Avatar>
          <Text size="xl" className="font-bold">
            Sam Whittfield
          </Text>
          <Text size="sm">Director Of Marketing And Business Development</Text>
          <HStack>
            <Text size="sm" className="font-bold text-blue-500">
              Farrel Fritz P.C
            </Text>
            <Text size="sm">- Australia</Text>
          </HStack>
        </VStack>
      </Center>
      <ContactsTabView />
    </VStack>
  );
};

export default ContactPage;
