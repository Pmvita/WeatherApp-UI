import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


    container: {
    flex: 1,
    backgroundColor: '#fff',
    },

    // headerContainer __________
    headerContainer: {
    padding: 16,
    backgroundColor: 'transparent', // #f2f2f2 if necessary
    top: 60,
    margin: 10,
    height: 60,
    }, // headerText
    headerText: {
    fontSize: 11,
    fontFamily: 'times new roman',
    color: '#757575',
    }, // Header Body
    headerBody: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'times new roman',
    color: '#616161',
    }, // Menu Icon
    menuIcon: {
    left: 320,
    bottom: 30,
    fontSize: 30,
    },

    // Main display __________
    mainDisplay: {
    backgroundColor: '#f2f2f2',
    top: 50,
    margin: 20,
    padding: 30,
    borderRadius: 40,
    height: 150,
    }, // Date Text
    dateText: {
    fontSize: 10,
    fontFamily: 'times new roman',
    color: '#9E9E9E',
    }, // Forecast Text
    forecast: {
    paddingTop: 10,
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'times new roman',
    color: '#616161',
    }, // temperature Text
    temperature: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'times new roman',
    color: '#616161',
    }, // Weather Icon
    weatherIcon: {
    left: 200,
    bottom: 70,
    }, 

    // secondaryDisplay __________
    secondaryDisplay: {
    backgroundColor: '#f2f2f2',
    top: 30,
    margin: 20,
    padding: 30,
    borderRadius: 30,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    }, // secondaryContent
    secondaryContent: {
    backgroundColor: 'transparent', // black to see
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    }, // Wind Icon
    detailIcon: {
    fontSize: 20,
    color: '#616161',
    marginBottom: 10,
    }, // text1
    text1: {
    fontSize: 17,
    fontWeight: '700',
    color: '#616161',
    }, // text2
    text2: {
    fontSize: 10,
    marginTop: 5,
    },

    // dateSelector __________
    dateSelector: {
    backgroundColor: 'transparent', // black to see
    top: -10,
    margin: 40,
    padding: 10,
    borderRadius: 30,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    }, // dateSelectorButton
    dateSelectorButton: {
    backgroundColor: 'transparent', // black to see
    padding: 10,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    }, // dateSelectorText
    dateSelectorText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#616161',
    },

    // hourlyForecast __________
    hourlyForecast: {
    backgroundColor: 'transparent', // black to see
    top: -38,
    width: '90%',
    flexDirection: 'row',
    overflow: 'hidden',
    marginLeft: 27,
    
    }, // hourlyForecastContainer
    hourlyForecastContainer: {
    backgroundColor: 'transparent', // black to see
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: 100,
    margin: 10,
    }, // hourlyForecastContent
    hourlyForecastContent: {
    backgroundColor: '#f2f2f2', // black to see
    padding: 14,
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    }, // hourlyForecastText
    hourlyForecastText: {
    fontSize: 10,
    color: '#616161',
    }, //hourlyForecastTemp
    hourlyForecastTemp: {
    fontSize: 15,
    fontWeight: '700',
    color: '#616161',
    },

    //dailyForecastChart __________
    dailyForecastChart: {
    position: 'absolute',
    marginTop: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent', // black to see
    },

});

export default styles