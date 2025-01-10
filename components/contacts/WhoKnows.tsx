import React from "react";
import { FlatList } from "react-native";

import { Text } from "../ui/text";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Button, ButtonText } from "../ui/button";
import { VStack } from "../ui/vstack";
import { Avatar, AvatarFallbackText, AvatarImage } from "../ui/avatar";

const data = [
  {
    id: "1",
    name: "Milles Archy",
    avatar: "",
    jobTitle: "Lawyers",
    interactions: "267 interactions",
    lastInteraction: "Last interaction 2 days ago",
  },
  {
    id: "2",
    name: "Rory Cameron",
    avatar: "",
    jobTitle: "Marketers",
    interactions: "267 interactions",
    lastInteraction: "Last interaction 2 days ago",
  },
  {
    id: "3",
    name: "Nadia Stewart",
    avatar: "",
    jobTitle: "Product Manager",
    interactions: "267 interactions",
    lastInteraction: "Last interaction 2 days ago",
  },
  {
    id: "4",
    name: "Nadia Stewart",
    avatar: "",
    jobTitle: "Product Manager",
    interactions: "267 interactions",
    lastInteraction: "Last interaction 2 days ago",
  },
  {
    id: "5",
    name: "Gloc 9",
    avatar: "",
    jobTitle: "Marketers",
    interactions: "267 interactions",
    lastInteraction: "Last interaction 2 days ago",
  },
  {
    id: "6",
    name: "Jared Cortez",
    avatar: "",
    jobTitle: "Marketers",
    interactions: "267 interactions",
    lastInteraction: "Last interaction 2 days ago",
  },
];

type itemProps = {
  name: string;
  jobTitle: string;
  interactions: string;
  lastInteraction: string;
  avatar: string;
  id: string;
};

export const Item = ({
  name,
  jobTitle,
  interactions,
  lastInteraction,
  avatar,
  id,
}) => (
  <VStack className="py-5 border-b-2 border-neutral-200 pl-5 justify-center">
    <HStack space="sm">
      <Avatar size="lg">
        <AvatarFallbackText>{name}</AvatarFallbackText>
      </Avatar>
      <VStack>
        <Text size="xl" className="font-bold">
          {name}
        </Text>
        <Text>{jobTitle}</Text>
        <Text className="font-bold">{interactions}</Text>
        <Text>{lastInteraction}</Text>
      </VStack>
    </HStack>
  </VStack>
);

// const Item = ({title}) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );

const WhoKnows: React.FC = () => {
  return (
    <Box className="py-2.5 h-5/6">
      <VStack>
        <HStack space="md" className="pl-5">
          <Button className="bg-blue-500 rounded-full">
            <ButtonText className="">Our Firm</ButtonText>
          </Button>
          <Button variant="outline" className="rounded-full border-gray-400">
            <ButtonText className="text-gray-400">Colleagues</ButtonText>
          </Button>
          <Button variant="outline" className="rounded-full border-gray-400">
            <ButtonText className="text-gray-400">Third Party</ButtonText>
          </Button>
        </HStack>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              jobTitle={item.jobTitle}
              interactions={item.interactions}
              lastInteraction={item.lastInteraction}
              avatar={item.avatar}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </VStack>
    </Box>
  );
};

export default WhoKnows;
