import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";

export default function TripChatSkeletonUI() {
  const skeletonData = Array(4).fill({});

  return (
    <LinearGradient colors={["white", "#FAF9F4"]} style={styles.container}>
      <MotiView
        style={styles.header}
        from={{ translateY: -50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <SkeletonLoader
          width="60%"
          height={20}
          borderRadius={10}
          marginTop={undefined}
          marginLeft={undefined}
        />
        <SkeletonLoader
          width="40%"
          height={15}
          borderRadius={10}
          marginTop={8}
          marginLeft={undefined}
        />
      </MotiView>

      <FlatList
        data={skeletonData}
        keyExtractor={(_, index) => index.toString()}
        style={styles.messagesContainer}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
        renderItem={() => (
          <SkeletonMessageBubble isUser={Math.random() > 0.5} />
        )}
      />

      <MotiView
        style={[styles.inputContainer]}
        from={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <SkeletonLoader
          width={"85%"}
          height="80%"
          borderRadius={15}
          marginTop={undefined}
          marginLeft={undefined}
        />
        <SkeletonLoader
          width={"15%"}
          height="80%"
          borderRadius={15}
          marginLeft={8}
          marginTop={undefined}
        />
      </MotiView>
    </LinearGradient>
  );
}

type SkeletonLoaderProps = {
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  marginTop?: number;
  marginLeft?: number;
};

const SkeletonLoader = ({
  width,
  height,
  borderRadius,
  marginTop,
  marginLeft,
}: SkeletonLoaderProps) => {
  return (
    <MotiView
      style={
        {
          width: width || "100%",
          height: height || 20,
          backgroundColor: "#E0E0E0",
          borderRadius: borderRadius || 4,
          marginTop: marginTop || 0,
          marginLeft: marginLeft || 0,
        } as ViewStyle
      }
      from={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "timing",
        duration: 800,
        loop: true,
        repeatReverse: true,
      }}
    />
  );
};

interface LoaderComponentProps {
  isUser: boolean;
}

const SkeletonMessageBubble = ({ isUser }: LoaderComponentProps) => {
  return (
    <View
      style={[
        styles.messageBubble,
        {
          alignSelf: isUser ? "flex-end" : "flex-start",
          width: "70%",
          backgroundColor: "#E0E0E0",
        },
      ]}
    >
      <SkeletonLoader
        width="90%"
        height={14}
        borderRadius={6}
        marginTop={undefined}
        marginLeft={undefined}
      />
      <SkeletonLoader
        width="60%"
        height={14}
        borderRadius={6}
        marginTop={4}
        marginLeft={undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },
  header: {
    marginBottom: 16,
  },
  messagesContainer: {
    flex: 1,
    marginVertical: 16,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 58,
    backgroundColor: "transparent",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
