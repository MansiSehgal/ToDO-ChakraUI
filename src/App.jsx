import { Heading } from "@chakra-ui/react";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Button } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setInputValue(data[index]);
    setEditIndex(index);
  };
  const deleteTodo = (index) => {
    const newTask = [...data];
    newTask.splice(index, 1);
    setData(newTask);
  };

  function addTodo(todo) {
    setData([...data, todo]);
  }
  const handleRemoveAll = () => {
    setData([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      if (editIndex !== null) {
        const updatedData = [...data];
        updatedData[editIndex] = inputValue;
        setData(updatedData);
        setInputValue("");
        setEditIndex(null);
      } else {
        setData([...data, inputValue]);
        setInputValue("");
      }
    }
  };

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>

      <AddTodo
        addTodo={addTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />
      <Button onClick={handleRemoveAll} colorScheme="pink" px="8" type="submit">
        Delete All
      </Button>
      <TodoList
        todos={data}
        deleteTodo={deleteTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleEdit={handleEdit}
      />
    </VStack>
  );
}

export default App;
