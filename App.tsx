import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles/AppStyles';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Header Component */  }
      <View style={styles.headerContainer}>
        <Text style={styles.headerText} >Welcome back,</Text>
        <Text style={styles.headerBody} >John Doe</Text>
        <Ionicons name="list-outline" style={styles.menuIcon} />
      </View>

      {/* Weather Display Content */}
      <View style={styles.mainDisplay}>
        <Text style={styles.dateText}>04 October 2024</Text>
        <Text style={styles.forecast}>Cloudy</Text>
        <Text style={styles.temperature}>28°C</Text>
        <Image source={require('./assets/cloudy.png')} style={styles.weatherIcon} />
      </View>

      {/* Weather Display Content */}
      <View style={styles.secondaryDisplay}>

        <View style={styles.secondaryContent}>
          <Ionicons name="leaf-outline" style={styles.detailIcon} />
          <Text style={styles.text1}>12 m/s</Text>
          <Text style={styles.text2}>Wind</Text>
        </View>

        <View style={styles.secondaryContent}>
          <Ionicons name="water-outline"  style={styles.detailIcon} />
          <Text style={styles.text1}>98%</Text>
          <Text style={styles.text2}>Humidity</Text>
        </View>

        <View style={styles.secondaryContent}>
          <Ionicons name="rainy-outline"  style={styles.detailIcon} />
          <Text style={styles.text1}>100%</Text>
          <Text style={styles.text2}>Rain</Text>
        </View>
      </View>

      {/* Forecast Content */}
      <View style={styles.dateSelector}>
        <TouchableOpacity style={styles.dateSelectorButton}>
          <Text style={styles.dateSelectorText}>Today</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.dateSelectorButton}>
          <Text style={styles.dateSelectorText}>Tomorrow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateSelectorButton}>
          <Text style={styles.dateSelectorText}>This Week</Text>
        </TouchableOpacity>
      </View>

      {/* Hourly Forecast Content */}
      <ScrollView style={styles.hourlyForecast} contentContainerStyle={styles.hourlyForecastContainer} horizontal={true} >

        <View style={styles.hourlyForecastContent}>
          <Text style={styles.hourlyForecastText}>10 am</Text>
          <Ionicons name="cloud-outline"  style={styles.detailIcon} />
          <Text style={styles.hourlyForecastTemp}>16°C</Text>
        </View>

        <View style={styles.hourlyForecastContent}>
          <Text style={styles.hourlyForecastText}>11 am</Text>
          <Ionicons name="cloud-outline"  style={styles.detailIcon} />
          <Text style={styles.hourlyForecastTemp}>17°C</Text>
        </View>

        <View style={styles.hourlyForecastContent}>
          <Text style={styles.hourlyForecastText}>12 pm</Text>
          <Ionicons name="cloud-outline"  style={styles.detailIcon} />
          <Text style={styles.hourlyForecastTemp}>20°C</Text>
        </View>

        <View style={styles.hourlyForecastContent}>
          <Text style={styles.hourlyForecastText}>12 pm</Text>
          <Ionicons name="cloud-outline"  style={styles.detailIcon} />
          <Text style={styles.hourlyForecastTemp}>20°C</Text>
        </View>
      </ScrollView>

      {/* Daily Forecast Chart */}
      <Image source={require('./assets/chart.png')} style={styles.dailyForecastChart}/>


      {/* Footer Component */}
      <StatusBar style="auto" />
    </View>
  );
}