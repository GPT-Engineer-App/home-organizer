import React, { useState } from "react";
import { ChakraProvider, Box, Container, Heading, VStack, HStack, Input, IconButton, List, ListItem, ListIcon, Text, Image, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const toast = useToast();

  const handleNewItemChange = (e) => setNewItem(e.target.value);

  const handleAddItem = () => {
    if (newItem.trim() === "") {
      toast({
        title: "No item entered.",
        description: "Please enter an item's name.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" p={4}>
        <VStack spacing={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1565620731358-e8c038abc8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lJTIwb3JnYW5pemF0aW9ufGVufDB8fHx8MTcwODUzNTQ3OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Home Organization" mb={4} />
          <Heading>Home Items Organizer</Heading>
          <HStack>
            <Input placeholder="Add new item..." value={newItem} onChange={handleNewItemChange} />
            <IconButton icon={<FaPlus />} onClick={handleAddItem} colorScheme="teal" aria-label="Add item" />
          </HStack>
          <List spacing={3} width="100%">
            {items.map((item, index) => (
              <ListItem key={index} paddingY={2} boxShadow="sm">
                <HStack justifyContent="space-between">
                  <Text fontSize="lg">{item}</Text>
                  <IconButton icon={<FaTrash />} onClick={() => handleDeleteItem(index)} colorScheme="red" aria-label="Delete item" size="sm" />
                </HStack>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
