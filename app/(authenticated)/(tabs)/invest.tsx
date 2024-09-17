import { View, Text } from "react-native";
import React from "react";

const Page = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 30,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 25, marginTop: 20 }}>Coming Soon...</Text>
      {/* <Text style={{ fontSize: 25, marginTop: 20 }}>Stay Tuned...</Text> */}
    </View>
  );
};

export default Page;
