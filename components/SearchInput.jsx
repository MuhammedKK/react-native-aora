import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  handleChangeText,
  containerStyle,
  keyboardType,
  placeholder,
  ...props
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex-row-reverse space-x-4">
      <TextInput
        className="flex-1 text-white font-psemibold text-base"
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        secureTextEntry={title === "Password" && !showPass}
        {...props}
      />

        <TouchableOpacity>
            <Image 
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
