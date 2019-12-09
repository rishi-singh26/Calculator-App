import React from "react";
import * as Font from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Icon, SocialIcon, Button } from "react-native-elements";

const deviceWidth = Dimensions.get("window").width;

var count = 0;

export default class Main extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      data: 0,
      history: 0
    };
    this.inputBO = this.inputBO.bind(this);
    this.inputBC = this.inputBC.bind(this);
    this.input7 = this.input7.bind(this);
    this.input8 = this.input8.bind(this);
    this.input9 = this.input9.bind(this);
    this.inputM = this.inputM.bind(this);
    this.input4 = this.input4.bind(this);
    this.input5 = this.input5.bind(this);
    this.input6 = this.input6.bind(this);
    this.inputS = this.inputS.bind(this);
    this.input1 = this.input1.bind(this);
    this.input2 = this.input2.bind(this);
    this.input3 = this.input3.bind(this);
    this.inputD = this.inputD.bind(this);
    this.inputA = this.inputA.bind(this);
    this.inputZ = this.inputZ.bind(this);
    this.inputP = this.inputP.bind(this);
    this.del = this.del.bind(this);
    this.backSpace = this.backSpace.bind(this);
    this.res = this.res.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      "open-sans-bold": require("../assets/fonts/Orbitron-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  inputBO() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "(";
    } else {
      newData = currentData + "(";
    }
    this.setState({ data: newData });
  }

  inputBC() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = ")";
    } else {
      newData = currentData + ")";
    }
    this.setState({ data: newData });
  }

  input7() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "7";
    } else {
      newData = currentData + "7";
    }
    this.setState({ data: newData });
  }

  input8() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "8";
    } else {
      newData = currentData + "8";
    }
    this.setState({ data: newData });
  }

  input9() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "9";
    } else {
      newData = currentData + "9";
    }
    this.setState({ data: newData });
  }

  inputM() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "*";
    } else {
      newData = currentData + "*";
    }
    this.setState({ data: newData });
  }

  input4() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "4";
    } else {
      newData = currentData + "4";
    }
    this.setState({ data: newData });
  }

  input5() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "5";
    } else {
      newData = currentData + "5";
    }
    this.setState({ data: newData });
  }

  input6() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "6";
    } else {
      newData = currentData + "6";
    }
    this.setState({ data: newData });
  }

  inputS() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "-";
    } else {
      newData = currentData + "-";
    }
    this.setState({ data: newData });
  }

  input1() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "1";
    } else {
      newData = currentData + "1";
    }
    this.setState({ data: newData });
  }

  input2() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "2";
    } else {
      newData = currentData + "2";
    }
    this.setState({ data: newData });
  }

  input3() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "3";
    } else {
      newData = currentData + "3";
    }
    this.setState({ data: newData });
  }

  inputD() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "/";
    } else {
      newData = currentData + "/";
    }
    this.setState({ data: newData });
  }

  inputA() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "+";
    } else {
      newData = currentData + "+";
    }
    this.setState({ data: newData });
  }

  inputZ() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "0";
    } else {
      newData = currentData + "0";
    }
    this.setState({ data: newData });
  }

  inputP() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = ".";
    } else {
      newData = currentData + ".";
    }
    this.setState({ data: newData });
  }

  del() {
    this.setState({ data: 0 });
  }

  backSpace() {
    var currentData = this.state.data;
    var currentStringData = currentData.toString();
    var dataArray = currentStringData.split("");
    dataArray.pop();
    var newData = dataArray.join("");
    this.setState({ data: newData });
  }

  res() {
    var res = eval(this.state.data);
    this.setState({ data: res });
    count = count + 1;
    var historyData = { id: count, equation: this.state.data, result: res };
    var currentHistory = this.state.history;
    if (currentHistory == 0) {
      this.setState({ history: [historyData] });
    } else {
      var updatedHistory = currentHistory.concat(historyData);
      this.setState({ history: updatedHistory });
    }
  }

  render() {
    // calculationHistory = this.state.history
    //   .slice(0)
    //   .reverse()
    //   .map(history => {
    //     return (
    //       <View>
    //         <View key={history.id}>
    //           {this.state.fontLoaded ? (
    //             <Text style={{ fontFamily: "open-sans-bold", fontSize: 30 }}>
    //               {history.equation} "+" {history.result}
    //             </Text>
    //           ) : null}
    //         </View>
    //       </View>
    //     );
    //   });

    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <SafeAreaView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: 80
            }}
          >
            <View>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontFamily: "open-sans-bold",
                    fontSize: 30,
                    color: "white"
                  }}
                >
                  Calaculator X
                </Text>
              ) : null}
            </View>
            <Text></Text>
            <Text></Text>
            <View style={styles.screen}>
              {this.state.fontLoaded ? (
                <Text style={{ fontFamily: "open-sans-bold", fontSize: 20 }}>
                  {this.state.data}
                </Text>
              ) : null}
            </View>
            <Text></Text>
            <Text></Text>
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="ios-arrow-back"
                  type="ionicon"
                  color="#000"
                  onPress={this.inputBO}
                />
                <Icon
                  raised
                  name="ios-arrow-forward"
                  type="ionicon"
                  color="#000"
                  onPress={this.inputBC}
                />
                <Icon
                  raised
                  name="arrowleft"
                  type="antdesign"
                  color="#ff9900"
                  onPress={this.backSpace}
                />
                <Icon
                  raised
                  name="plus"
                  type="antdesign"
                  color="#000"
                  onPress={this.inputA}
                />
              </View>
            </View>
            <Text></Text>
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="numeric-7"
                  type="material-community"
                  color="#000"
                  onPress={this.input7}
                />
                <Icon
                  raised
                  name="numeric-8"
                  type="material-community"
                  color="#000"
                  onPress={this.input8}
                />
                <Icon
                  raised
                  name="numeric-9"
                  type="material-community"
                  color="#000"
                  onPress={this.input9}
                />
                <Icon
                  raised
                  name="close"
                  type="antdesign"
                  color="#000"
                  onPress={this.inputM}
                />
              </View>
            </View>
            <Text></Text>
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="numeric-4"
                  type="material-community"
                  color="#000"
                  onPress={this.input4}
                />
                <Icon
                  raised
                  name="numeric-5"
                  type="material-community"
                  color="#000"
                  onPress={this.input5}
                />
                <Icon
                  raised
                  name="numeric-6"
                  type="material-community"
                  color="#000"
                  onPress={this.input6}
                />
                <Icon
                  raised
                  name="minus"
                  type="antdesign"
                  color="#000"
                  onPress={this.inputS}
                />
              </View>
            </View>
            <Text></Text>
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="numeric-1"
                  type="material-community"
                  color="#000"
                  onPress={this.input1}
                />
                <Icon
                  raised
                  name="numeric-2"
                  type="material-community"
                  color="#000"
                  onPress={this.input2}
                />
                <Icon
                  raised
                  name="numeric-3"
                  type="material-community"
                  color="#000"
                  onPress={this.input3}
                />
                <Icon
                  raised
                  name="division"
                  type="material-community"
                  color="#000"
                  onPress={this.inputD}
                />
              </View>
            </View>
            <Text></Text>
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="trash"
                  type="font-awesome"
                  color="red"
                  onPress={this.del}
                />
                <Icon
                  raised
                  name="numeric-0"
                  type="material-community"
                  color="#000"
                  onPress={this.inputZ}
                />
                <Icon
                  raised
                  name="dot-single"
                  type="entypo"
                  color="#000"
                  onPress={this.inputP}
                />
                <Icon
                  raised
                  name="equal"
                  type="material-community"
                  color="green"
                  onPress={this.res}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#7ebd3a",
    justifyContent: "center",
    maxHeight: 150,
    minHeight: 150,
    minWidth: (deviceWidth / 10) * 8,
    maxWidth: (deviceWidth / 10) * 8,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 5
  },
  btnRow: {
    flex: 1
  },
  fixToScreen: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
