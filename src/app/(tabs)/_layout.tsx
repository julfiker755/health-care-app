import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/components/useColorScheme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="doctors"
        options={{
          title: "Doctors",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-doctor" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: "Blog",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="blog" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// headerRight: () => (
//   <Link href="/modal" asChild>
//     <Pressable>
//       {({ pressed }) => (
//         <FontAwesome
//           name="info-circle"
//           size={25}
//           color={Colors[colorScheme ?? 'light'].text}
//           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//         />
//       )}
//     </Pressable>
//   </Link>
// ),
