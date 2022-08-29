import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { Formik } from "formik";
import React from "react";
import style from "./Style";
import globalStyles from "../../globalStyle";
import * as yup from "yup";

const FormSchema = yup.object({
  field1: yup.string().required(),
  field2: yup.number().test("isNum", "please enter valid number", (val) => {
    return parseInt(val) > 0;
  }),
});

export default function Form() {
  return (
    <View>
      <Formik
        initialValues={{
          field1: "",
          field2: "",
          field3: "",
          field4: "",
          field5: "",
          field6: "",
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: "" });
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <View style={style.container}>
              <View style={style.left}>
                <TextInput
                  style={[style.input, globalStyles.text]}
                  placeholder="name"
                  onChangeText={props.handleChange("field1")}
                  value={props.values.field1}
                  onBlur={props.handleBlur("field1")}
                />
                <Text style={[globalStyles.text, { color: "red" }]}>
                  {props.touched.field1 && props.errors.field1}
                </Text>
                <TextInput
                  keyboardType="numeric"
                  style={[style.input, globalStyles.text]}
                  placeholder="age"
                  onChangeText={props.handleChange("field2")}
                  value={props.values.field2}
                  onBlur={props.handleBlur("field2")}
                />
                <Text style={[globalStyles.text, { color: "red" }]}>
                  {props.touched.field2 && props.errors.field2}
                </Text>
                <TextInput
                  multiline
                  style={[style.input, globalStyles.text]}
                  placeholder="desc"
                  onChangeText={props.handleChange("field3")}
                  value={props.values.field3}
                />
              </View>
              {/* left */}
              <View style={style.right}>
                <TextInput
                  style={[style.input, globalStyles.text]}
                  placeholder="name4"
                  onChangeText={props.handleChange("field4")}
                  value={props.values.field4}
                />
                <TextInput
                  keyboardType="numeric"
                  style={[style.input, globalStyles.text]}
                  placeholder="age5"
                  onChangeText={props.handleChange("field5")}
                  value={props.values.field5}
                />
                <TextInput
                  multiline
                  style={[style.input, globalStyles.text]}
                  placeholder="desc6"
                  onChangeText={props.handleChange("field6")}
                  value={props.values.field6}
                />
              </View>
            </View>
            {/* submit button */}
            <TouchableHighlight
              style={globalStyles.center}
              onPress={props.handleSubmit}
            >
              <View style={globalStyles.button}>
                <Text style={globalStyles.text}>Submit</Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
      </Formik>
    </View>
  );
}
