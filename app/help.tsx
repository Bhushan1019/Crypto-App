import { View, Text } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

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
      <Text style={{ fontSize: 20, fontWeight: "300" }}>
        For Now Only Phone Number Can be Used for Login or Signup. Other
        Services will be available soon.
      </Text>
      <Text style={{ fontSize: 25, marginTop: 20 }}>Stay Tuned...</Text>
    </View>
  );
};

export default Page;
