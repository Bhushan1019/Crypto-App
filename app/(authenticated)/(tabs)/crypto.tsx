import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const foo = async () => {
      const res = await fetch("/api/listings");
    };
    foo();
  }, []);
  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
