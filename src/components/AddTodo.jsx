/* eslint-disable react/prop-types */
import { Button, HStack, Input } from "@chakra-ui/react";

export const AddTodo = ({
  editIndex,
  inputValue,
  setInputValue,
  handleSubmit,
}) => {
  console.log(editIndex, "editIndex");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="learning chakraui with todo app"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          {editIndex !== null ? "update Todo" : "Add Todo"}
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
