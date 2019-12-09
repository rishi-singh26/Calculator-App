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
      history: 0,
      backBtnDisabled: true
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
    this.percentage = this.percentage.bind(this);
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
    this.setState({ data: newData, backBtnDisabled: false });
  }

  inputBC() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = ")";
    } else {
      newData = currentData + ")";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input7() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "7";
    } else {
      newData = currentData + "7";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input8() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "8";
    } else {
      newData = currentData + "8";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input9() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "9";
    } else {
      newData = currentData + "9";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  inputM() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "*";
    } else {
      newData = currentData + "*";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input4() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "4";
    } else {
      newData = currentData + "4";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input5() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "5";
    } else {
      newData = currentData + "5";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input6() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "6";
    } else {
      newData = currentData + "6";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  inputS() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "-";
    } else {
      newData = currentData + "-";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input1() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "1";
    } else {
      newData = currentData + "1";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input2() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "2";
    } else {
      newData = currentData + "2";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  input3() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "3";
    } else {
      newData = currentData + "3";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  inputD() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "/";
    } else {
      newData = currentData + "/";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  inputA() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "+";
    } else {
      newData = currentData + "+";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  inputZ() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "0";
    } else {
      newData = currentData + "0";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  inputP() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = ".";
    } else {
      newData = currentData + ".";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  percentage() {
    var currentData = this.state.data;
    var newData;
    if (currentData == 0) {
      newData = "%";
    } else {
      newData = currentData + "%";
    }
    this.setState({ data: newData, backBtnDisabled: false });
  }

  del() {
    this.setState({ data: 0, backBtnDisabled: true });
  }

  backSpace() {
    var currentData = this.state.data;
    var currentStringData = currentData.toString();
    var dataArray = currentStringData.split("");
    dataArray.pop();
    var newData = dataArray.join("");
    this.setState({ data: newData });
    if (newData.length == 0) {
      this.setState({ backBtnDisabled: true });
    }
  }

  res() {
    var expression = this.state.data;
    var expressionArray = expression.split("%");
    if (expressionArray.length == 1) {
      var res = eval(this.state.data);
      this.setState({ data: res });
      count = count + 1;
      // var historyData = { id: count, equation: this.state.data, result: res };
      // var currentHistory = this.state.history;
      // if (currentHistory == 0) {
      //   this.setState({ history: [historyData] });
      // } else {
      //   var updatedHistory = currentHistory.concat(historyData);
      //   this.setState({ history: updatedHistory });
      // }
    } else if (expressionArray.length == 2) {
      var res = (expressionArray[0] / 100) * expressionArray[1];
      this.setState({ data: res });
      count = count + 1;
    } else {
      this.setState({ data: "Syntax Error" });
      count = count + 1;
    }
  }

  backSpaceButtonComponent = () => {
    if (this.state.backBtnDisabled) {
      return <View style={{ minHeight: 88 }}></View>;
    } else {
      return (
        <View style={styles.backSpaceBtn}>
          <Icon
            raised
            name="arrowleft"
            type="antdesign"
            color="#000"
            size={35}
            onPress={this.backSpace}
            reverse={true}
            // reverseColor="#ff9900"
            reverseColor="#fff"
            onLongPress={this.del}
          />
        </View>
      );
    }
  };

  render() {
    // calculationHistory = this.state.history
    //   .slice(0)
    //   .reverse()
    //   .map(history => {
    //     return (
    //       <View>
    //         <View key={history.id}>
    //           {this.state.fontLoaded ? (
    //             <Text style={{ fontFamily: "open-sans-bold", fontSize: 32 }}>
    //               {history.equation} "+" {history.result}
    //             </Text>
    //           ) : null}
    //         </View>
    //       </View>
    //     );
    //   });

    return (
      <ScrollView style={{ backgroundColor: "#000" }}>
        <SafeAreaView>
          <View
            style={{
              flex: 1,
              alignItems: "center"
            }}
          >
            <View
              style={{ borderBottomColor: "#3d3d3d", borderBottomWidth: 1 }}
            >
              <View style={styles.screen}>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      fontFamily: "open-sans-bold",
                      fontSize: 20,
                      color: "white",
                      marginLeft: 12
                    }}
                  >
                    {this.state.data}
                  </Text>
                ) : null}
              </View>
              <View>
                <this.backSpaceButtonComponent />
              </View>
            </View>
            <Text></Text>
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="copyright"
                  type="font-awesome"
                  color="#171717"
                  size={35}
                  onPress={this.del}
                  reverse={true}
                  reverseColor="#b35419"
                />
                <Icon
                  raised
                  name="ios-arrow-back"
                  type="ionicon"
                  color="#171717"
                  size={35}
                  onPress={this.inputBO}
                  reverse={true}
                  reverseColor="green"
                />
                <Icon
                  raised
                  name="ios-arrow-forward"
                  type="ionicon"
                  color="#171717"
                  size={35}
                  onPress={this.inputBC}
                  reverse={true}
                  reverseColor="green"
                />
                <Icon
                  raised
                  name="plus"
                  type="antdesign"
                  color="#171717"
                  size={35}
                  onPress={this.inputA}
                  reverse={true}
                  reverseColor="green"
                />
              </View>
            </View>
            {/* <Text></Text> */}
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="numeric-7"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input7}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="numeric-8"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input8}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="numeric-9"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input9}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="close"
                  type="antdesign"
                  color="#171717"
                  size={35}
                  onPress={this.inputM}
                  reverse={true}
                  reverseColor="green"
                />
              </View>
            </View>
            {/* <Text></Text> */}
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="numeric-4"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input4}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="numeric-5"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input5}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="numeric-6"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input6}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="minus"
                  type="antdesign"
                  color="#171717"
                  size={35}
                  onPress={this.inputS}
                  reverse={true}
                  reverseColor="green"
                />
              </View>
            </View>
            {/* <Text></Text> */}
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="numeric-1"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input1}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="numeric-2"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input2}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="numeric-3"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.input3}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="division"
                  type="material-community"
                  color="#171717"
                  size={35}
                  onPress={this.inputD}
                  reverse={true}
                  reverseColor="green"
                />
              </View>
            </View>
            {/* <Text></Text> */}
            <View>
              <View style={styles.fixToScreen}>
                <Icon
                  raised
                  name="percent"
                  type="feather"
                  color="#171717"
                  size={35}
                  onPress={this.percentage}
                  reverse={true}
                  reverseColor="green"
                />
                <Icon
                  raised
                  name="numeric-0"
                  type="material-community"
                  color="#171717"
                  size={35}
                  reverse={true}
                  reverseColor="#ffffff"
                  onPress={this.inputZ}
                />
                <Icon
                  raised
                  name="dot-single"
                  type="entypo"
                  color="#171717"
                  size={35}
                  onPress={this.inputP}
                  reverse={true}
                  reverseColor="#ffffff"
                />
                <Icon
                  raised
                  name="equal"
                  type="material-community"
                  color="green"
                  size={35}
                  onPress={this.res}
                  reverse={true}
                  reverseColor="white"
                />
              </View>
            </View>
            <Text></Text>
            <View style={{ flex: 1, margin: 20 }}>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontFamily: "open-sans-bold",
                    fontSize: 20,
                    color: "white"
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus atque nesciunt doloribus dignissimos assumenda quibusdam
                  nostrum animi delectus alias incidunt quis repudiandae facere
                  voluptatibus nisi voluptate eaque, quos reprehenderit
                  recusandae. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Libero quis quas perferendis facilis, neque
                  deserunt et blanditiis, soluta sequi eius obcaecati est
                  mollitia impedit deleniti, odit vitae nihil fugit. Dolor.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus saepe expedita, dolores delectus aliquid eos
                  cupiditate beatae aspernatur nulla exercitationem facilis eum
                  distinctio tempore tenetur praesentium, ex libero suscipit.
                  Praesentium.
                </Text>
              ) : null}
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
    justifyContent: "center",
    maxHeight: 270,
    minHeight: 270,
    minWidth: (deviceWidth / 10) * 8,
    maxWidth: (deviceWidth / 10) * 8
  },
  btnRow: {
    flex: 1
  },
  fixToScreen: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  backSpaceBtn: {
    flexDirection: "column",
    justifyContent: "flex-end",
    marginLeft: (deviceWidth / 10) * 6
  }
});
