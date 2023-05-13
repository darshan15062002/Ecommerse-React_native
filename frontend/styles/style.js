import { Platform, StatusBar, StyleSheet } from "react-native";

export const color = StyleSheet.create({
    // color1: '#647E68',
    color1: '#5D3891',
    // color1: '#c70049',
    color1_light: ' rgba(227, 25, 99)',
    color1_light2: 'rgba(199,0,73,0.8)',
    color2: 'white',
    color3: 'rgba(45,45,45,1)',
    color4: 'transparent',
    color5: '#f2f2f2',
    color6: '#f7f7f7'
})
export const defaultstyling = StyleSheet.create({
    padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: color.color2,
})
export const inputStyleing = StyleSheet.create({


    height: 50,
    backgroundColor: color.color2,
    marginVertical: 10,
    marginHorizontal: 20,
})
export const formHeading = StyleSheet.create({
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: color.color3,
    color: color.color2,
    padding: 5,
    borderRadius: 5
})