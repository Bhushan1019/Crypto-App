import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundBtn from "@/components/RoundBtn";
import Dropdown from "@/components/Dropdown";

const Page = () => {
  const balance = 0;

  const onAddMoney = () => {};
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>₹</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn icon={"add"} text={"Add Money"} onPress={onAddMoney} />
        <RoundBtn icon={"refresh"} text={"Exchange"} />
        <RoundBtn icon={"list"} text={"Details"} />
        <Dropdown />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 60,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 30,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
export default Page;
