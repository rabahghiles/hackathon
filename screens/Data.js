import { View, Text, StyleSheet, Platform, NativeModules, TouchableOpacity, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const { StatusBarManager } = NativeModules;


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const Title = ({title}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const Header = ({consomation, consomationDiff, economieDiff}) => {

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{consomation} kWh</Text>
      <View style={styles.headerSubTitleContainer}>
        { consomationDiff && <Text style={styles.headerSubTitle_1}>{consomationDiff} kWh</Text>}
        { economieDiff && <Text style={[styles.headerSubTitle_2, economieDiff < 0 && styles.headerSubTitle_2_Red ]}>({economieDiff}€)</Text>}
      </View>
    </View>
  )
}

const days = [
  "Lun.",
  "Mar.",
  "Mer.",
  "Jeu",
  "Ven",
  "Sam",
  "Dim"
]


const Slider = () => {
  return (
    <View style={styles.graphContainer}>
      <View style={styles.graph}>

      <LineChart
        data={{
          // labels: [ "Lun.", "Mar.", "Mer.", "Jeu","Ven", "Sam", "Dim"],
          datasets: [
            {
              data: [
                1676,
                1859,
                2334,
                1678,
                2819,
                2889,
                2673
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        yAxisSuffix=" kWh"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: "#0C1D40",
          backgroundGradientTo: "#0C1D40",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />

      </View>
      <View style={styles.graphButtonsContainer}>
        {
          days.map(day => <TouchableOpacity
              style={styles.graphButtons}
              onPress={() => console.log("HELLO")}
            >
              <Text style={styles.graphButtonsText}>{day}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

function DataScreen ({navigation}){
  return ( 
    <View style={styles.container}>
      <Title title="Consomation" />
      <Header consomation={1647} consomationDiff={-12} economieDiff={3}  />
      <Slider />
      <View style={styles.advices}><Text>Conseils</Text></View>
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: "#0C1D40",
    flex: 1,
  },
  
  titleContainer: {
    backgroundColor: "#1C3059",
    paddingTop: STATUSBAR_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50 + STATUSBAR_HEIGHT,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#d0d0d1",
  },


  header: {
    padding: 20
  },
  headerTitle: {
    color: "#e8e6eb",
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerSubTitleContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },
  headerSubTitle_1: {
    color: "#7e7886",
    marginLeft: 2,
    marginRight: 2,
  },
  headerSubTitle_2: {
    color: "#B9D4A9",
    marginLeft: 2,
    marginRight: 2,
  },
  headerSubTitle_2_Red: {
    color: "#D97A87",
  },

  graphContainer: {
    flex: 3,
  },
  graph: {
    // flex: 1,
    // padding: 10,
  },
  graphButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  graphButtons: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3,
    backgroundColor: "#1C3059",
  },
  graphButtonsText: {
    color: "#e8e6eb",
    fontSize: 12,
    fontWeight: "500",
  },


  advices: {
    flex: 3,
  },
})


export default DataScreen;