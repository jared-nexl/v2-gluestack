import React from "react";
import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
} from "../ui/select";
import { HStack } from "../ui/hstack";
import { Box } from "../ui/box";
import { ScrollView, FlatList } from "react-native";

import { Table, TableBody, TableRow, TableData } from "../ui/table";
import { Button, ButtonText } from "../ui/button";

const ContactDetails: React.FC = () => {
  return (
    <Box className="h-5/6">
      <ScrollView>
        <VStack className="pt-5 px-5 pb-24" space="xl">
          <Text size="md" className="font-bold">
            Last Interaction
          </Text>
          <Text size="sm">35 mins ago</Text>
          <Text size="md" className="font-bold">
            Stay In Touch
          </Text>
          <Select>
            <SelectTrigger>
              <SelectInput placeholder="Every 3 Months" className="flex-1" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Every 1 Months" value="" />
                <SelectItem label="Every 3 Months" value="" />
                <SelectItem label="Every 6 Months" value="" />
              </SelectContent>
            </SelectPortal>
          </Select>
          <Text size="md" className="font-bold">
            Email
          </Text>
          <Text size="sm">cameron.whittfield@gmail.com</Text>
          <Text size="md" className="font-bold">
            Tags
          </Text>
          <HStack space="sm">
            <Text size="sm" className="bg-gray-200 px-2 py-1 rounded-full">
              Customer
            </Text>
            <Text size="sm" className="bg-gray-200 px-2 py-1 rounded-full">
              VIP
            </Text>
          </HStack>
          <Text size="sm" className="font-bold">
            List Membership
          </Text>
          <HStack className="border-b-2 border-neutral-200 p-1 justify-between">
            <Text>Monthly Newsletter</Text>
            <Text className="font-bold text-blue-500">REMOVE</Text>
          </HStack>
          <HStack className="border-b-2 border-neutral-200 p-1 justify-between">
            <Text>Monthly Gathering Event</Text>
            <Text className="font-bold text-blue-500">REMOVE</Text>
          </HStack>
          <HStack className="border-b-2 border-neutral-200 p-1 justify-between">
            <Text>Insurance Group</Text>
            <Text className="font-bold text-blue-500">REMOVE</Text>
          </HStack>
          <Box className="pt-5">
            <Button variant="outline" className="border-blue-500">
              <ButtonText className="text-blue-500">ADD</ButtonText>
            </Button>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default ContactDetails;
