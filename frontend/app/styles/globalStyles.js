import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  backgroundStart: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainerStart: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    top: 180,
  },
  logoStart: {
    width: 240,
    height: 140,
    alignSelf: "center",
  },
  logoTextStart: {
    fontSize: 50,
    alignSelf: "center",
    color: "lightgray",
  },
  registerContainerStart: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonStart: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 70,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 35,
    elevation: 3,
    backgroundColor: "lightgray",
  },
  registerTextStart: {
    fontSize: 35,
  },
  backgroundRegister: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  credintialsContainerRegister: {
    height: 250,
    width: "100%",
    justifyContent: "space-around",
    bottom: 50,
  },
  registerContainterRegister: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoContainerRegister: {
    width: "100%",
    flex: 0.5,
    flexDirection: "column",
    top: 80,
  },
  logoRegister: {
    width: 240,
    height: 140,
    alignSelf: "center",
  },
  logoTextRegister: {
    fontSize: 50,
    alignSelf: "center",
    color: "lightgray",
  },

  registerButtonRegister: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 70,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 35,
    elevation: 3,
    backgroundColor: "lightgray",
    alignSelf: "center",
    top: 10,
  },
  registerTextRegister: {
    fontSize: 35,
  },
  inputControlRegister: {
    height: 50,
    width: 250,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    alignSelf: "center",
    fontSize: 20,
  },
  backgroundLogin: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  credintialsContainerLogin: {
    height: 220,
    width: "100%",
    justifyContent: "space-around",
    bottom: 25,
  },
  loginContainterLogin: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoContainerLogin: {
    width: "100%",
    flex: 0.5,
    flexDirection: "column",
    top: 90,
  },
  logoLogin: {
    width: 240,
    height: 140,
    alignSelf: "center",
  },
  logoTextLogin: {
    fontSize: 50,
    alignSelf: "center",
    color: "lightgray",
  },

  loginButtonLogin: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 70,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 35,
    elevation: 3,
    backgroundColor: "lightgray",
    alignSelf: "center",
    top: 10,
  },
  loginTextLogin: {
    fontSize: 35,
  },
  inputControlLogin: {
    height: 50,
    width: 250,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    alignSelf: "center",
    fontSize: 20,
  },
  backgroundHome: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cardContainerHome: {
    height: 150,
    width: "100%",
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
  userContainerHome: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    flex: 0.13,
  },
  dropdownHome: {
    margin: 10,
    height: 40,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  scrollableContainerHome: {
    flex: 1.5,
    alignSelf: "center",
    width: "90%",
    alignContent: "center",
    marginBottom: 15,
    marginTop: 10,
    zIndex: 0,
  },
  selectYourTripTextHome: {
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingBottom: 40,
    paddingLeft: 10,
  },
  autocompleteContainerHome: {
    position: "absolute",
    width: "100%",
    top: 160,
    zIndex: 1,
  },
  menuContainerHome: {
    flex: 0.2,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,
    alignSelf: "center",
    backgroundColor: "pink",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  welcomeContainerHome: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  iconHome: {
    marginRight: 5,
  },
  itemHome: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItemHome: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyleHome: {
    fontSize: 16,
  },
  selectedTextStyleHome: {
    fontSize: 16,
  },
  iconStyleHome: {
    width: 20,
    height: 20,
  },
  inputSearchStyleHome: {
    height: 40,
    fontSize: 16,
  },
  placeToVisitImageContainerHome: {
    width: "50%",
    height: "99.5%",
    resizeMode: "cover",
    borderRadius: 16,
    marginRight: 10,
  },
  placeToVisitWithoutImageContainerHome: {
    width: "50%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 16,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  placeNameHome: {
    bottom: 20,
    fontSize: 14,
    fontWeight: "bold",
    flexWrap: "wrap",
    maxWidth: "70%",
  },
});