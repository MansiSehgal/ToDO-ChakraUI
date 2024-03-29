/* eslint-disable react/prop-types */
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoList({ todos, deleteTodo, handleEdit }) {
  console.log(todos, "todos");
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No Todos, yay!!!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos?.map((todo, index) => (
        <HStack key={index}>
          <Text>{todo}</Text>
          <Spacer />
          <IconButton
            icon={<FaEdit />}
            isRound="true"
            onClick={() => handleEdit(index)}
          />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(index)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
