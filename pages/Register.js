import React from "react";
import { Box, VStack, FormControl, Input, Button, Heading } from "native-base";
import useRegister from "../hooks/useRegister";
import { useRoute } from "@react-navigation/native";
import { formLogin, formRegister } from "../helpers/DataForm";

const Register = ({ navigation }) => {
  const {
    handleCHangeRegister,
    handleChangeLogin,
    register,
    login,
    errors,
    handleSubmitLogin,
    handleSubmitRegister,
  } = useRegister(navigation);
  const route = useRoute();
  return (
    <Box safeArea p='5' flex={1} justifyContent='center'>
      <Heading>{route.name}</Heading>
      <VStack space={3}>
        <VStack space='5'>
          {route.name === "Register"
            ? formRegister.map((item, index) => (
                <FormControl key={index}>
                  <FormControl.Label>{item.label}</FormControl.Label>
                  <Input
                    key={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    onChangeText={(value) =>
                      handleCHangeRegister(item.name, value)
                    }
                  />
                </FormControl>
              ))
            : formLogin.map((item, index) => (
                <FormControl key={index}>
                  <FormControl.Label>{item.label}</FormControl.Label>
                  <Input
                    key={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    onChangeText={(value) =>
                      handleChangeLogin(item.name, value)
                    }
                  />
                  <FormControl.ErrorMessage>
                    {errors[item.name]}
                  </FormControl.ErrorMessage>
                </FormControl>
              ))}
        </VStack>
        <VStack space={5}>
          {route.name === "Register" ? (
            <Button
              variant={
                !register.name ||
                !register.username ||
                !register.email ||
                !register.password
                  ? "outline"
                  : "solid"
              }
              onPressIn={handleSubmitRegister}
              disabled={!register.email && !register.username ? true : false}
              colorScheme='primary'>
              Register
            </Button>
          ) : (
            <Button
              variant={"outline"}
              onPress={() => navigation.navigate("Register")}
              colorScheme='primary'>
              Register
            </Button>
          )}
          {route.name === "Login" ? (
            <Button
              variant={!login.username && !login.password ? "outline" : "solid"}
              onPressIn={handleSubmitLogin}
              disabled={!login.username && !login.password ? true : false}
              colorScheme='primary'>
              Login
            </Button>
          ) : (
            <Button
              variant={"outline"}
              onPress={() => navigation.navigate("Login")}
              colorScheme='primary'>
              Login
            </Button>
          )}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Register;
