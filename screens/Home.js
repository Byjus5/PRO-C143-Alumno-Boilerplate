import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";
import Star from 'react-native-star-view';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      movieDetails: {},
      ngrok_url:""
    }
  }

  /*define getmovie(), likedMovie(), dislikedMovie() ,notWatched() functions here*/


  render() {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/bg.png")}
            style={{ flex: 1 }}
          >
            <View
              style={styles.headerContainer}
            >
              <Text style={styles.headerTitle}>Recomendación de películas</Text>
              <Icon
                name="chevron-right"
                type="feather"
                color={"white"}
                size= {RFValue(30)}
                containerStyle={{position:"absolute",right:RFValue(5)}}
                onPress={() => {
                  this.props.navigation.navigate("Movies");
                }}
              ></Icon>
            </View>

            <View style={styles.subContainer}>
              <View style={styles.posterContainer}>
                  {/*Agrega el componente para la imagen del póster abajo*/}

              </View>
              <View style={{flex:0.15}}>
                 {/*Agrega los componentes para mostrar el nombre de la película y otros detalles (fecha de estreno y duración) abajo*/}

                
              </View>
              <View style={styles.ratingContainer}>
                {/*Agrega los componentes para mostrar la calificación de la película abajo*/}
                  
              </View>
              <View style={styles.iconButtonContainer}>
                {/*Agrega el código para los botones me gusta, no me gusta y no la he visto abajo*/}
                
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flex: 0.07,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor:"#182854"
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(18),
    fontFamily: "monospace",
    textAlign: "center",
    flex: 1
  },
  subContainer: {
    flex: 0.9,
  },
  posterContainer: {
    flex: 0.65,
    marginBottom:RFValue(10),
    justifyContent: "center",
    alignItems: "center",
  },
  posterImage: {
    width: RFValue(280),
    height: RFValue(380),
    resizeMode: "stretch",
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(5),
  },
  detailsContainer: {
    width: RFValue(280),
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(10),
    padding: RFValue(10),
    borderColor:"#182854",
    borderWidth:RFValue(2)
  },
  title: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  subtitle: {
    fontSize: RFValue(10),
    fontWeight: "bold",
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  ratingContainer: {
    flex: 0.1,
    alignItems:"center"
  },
  overview: {
    fontSize: RFValue(13),
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  iconButtonContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconImage: {
    width: RFValue(50),
    height: RFValue(50),
  },
  starStyle: {
    width: RFValue(200),
    height: RFValue(40),
  }
});
