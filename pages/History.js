import { Box, Text, Image } from "native-base";
import React from "react";
import useHistory from "../hooks/useHistory";

const History = () => {
  const { history, isLoading } = useHistory();
  console.log(history);
  return (
    <Box safeArea p={5}>
      <Text>History</Text>
      {history.map((item) => (
        <Box key={item.id} p={5} bg='gray.200' rounded={"xl"} my={2}>
          <Box
            p={3}
            rounded='md'
            background={!item.status ? "red.700" : "green.700"}>
            <Text>{!item.status ? "Sedang dalam Tinjauan" : "Diperbaiki"}</Text>
          </Box>
          <Image
            source={{
              uri: item.foto,
            }}
            alt='Foto Laporan'
            size='md'
          />
          <Text>{item.laporan}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default History;
