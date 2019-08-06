import React, { Component } from "react";
import { TextInput, View, Image, Alert } from "react-native";
import styles from "./styles.js";
import { Icon } from "react-native-elements";
import CustomIcon from "../../../resources/customIcon.js";

export default class SearchHeaderBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchEnabled: false,
    filterText: ""
  };

  getFilterText = () => {
    this.setState({ searchEnabled: false });
    this.props.getValueFromHeaderSearch;
  };

  render() {
    return (
      <View style={styles.navigationBar}>
        <View style={styles.titleArea}>
          {this.state.searchEnabled === true ? (
            <View style={styles.titleArea}>
              <Icon
                name="arrow-back"
                type="Ionicons"
                color="black"
                onPress={() => this.setState({ searchEnabled: false })}
              />
              <TextInput
                placeholder="Search"
                placeholderTextColor="black"
                style={styles.input}
                onChangeText={this.props.getValueFromHeaderSearch}
              />
              <Icon
                name="search"
                type="Ionicons"
                color="black"
                onPress={this.props.search}
              />
            </View>
          ) : (
            <View style={styles.titleArea}>
              <Image
                style={styles.profileImage}
                source={require("../../images/user_image_1.jpg")}
              />
              <View style={{ marginLeft: 220 }}>
                <CustomIcon
                  name="search"
                  color="black"
                  style={styles.customIcon}
                  size={20}
                  onPress={() => this.setState({ searchEnabled: true })}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <CustomIcon
                  name="bell"
                  color="black"
                  style={styles.customIcon}
                  size={20}
                  onPress={() => Alert.alert(
                    "Important",
                    "This feature isn't implemented yet. Stay connected for future updates.",
                    [
                      {text: "OK"},
                      {text: "Cancel"}
                    ],
                    {cancelable: false}
                  )}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}
