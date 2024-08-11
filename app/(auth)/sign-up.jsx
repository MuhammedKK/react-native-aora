import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    pass: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-10 items-end">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Signup in Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) =>
              setForm({
                ...form,
                username: e,
              })
            }
            containerStyle="mt-10"
            placeholder="Enter Your Username"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            containerStyle="mt-6"
            keyboardType="email-address"
            placeholder="Enter Your Email"
          />
          <FormField
            title="Password"
            value={form.pass}
            handleChangeText={(e) =>
              setForm({
                ...form,
                pass: e,
              })
            }
            containerStyle="mt-6"
            keyboardType="email-address"
            placeholder="Enter Your Password"
          />
          <CustomButton
            title={"Sign Up"}
            containerStyle={"w-full mt-6"}
            textStyles={"text-grey-200 font-psemibold text-lg"}
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <View className="justify-center pt-5 flex-grow gap-2 flex-row-reverse">
            <Text className="text-lg text-green-100 font-pregular">
              alleady have an account?
            </Text>
            <Link
              className="text-lg text-white text-secondary-100"
              href={"/sign-in"}
            >
              Signin
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
