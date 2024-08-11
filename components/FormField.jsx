import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
    title,
    value,
    handleChangeText,
    containerStyle,
    keyboardType,
    placeholder,
    ...props
}) => {

    const [showPass, setShowPass] = useState(false)

  return (
    <View className={`space-y-2 ${containerStyle} flex flex-col items-end`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex-row-reverse">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={"gray"}
          secureTextEntry={title === "Password" && !showPass}
          {...props}
        />

        {title === "Password" && (
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image 
                source={!showPass ? icons.eye : icons.eyeHide}
                resizeMode="contain"
                className="w-6 h-6"
            />
        </TouchableOpacity>
        )}

      </View>

    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
