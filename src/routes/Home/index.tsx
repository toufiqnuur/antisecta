/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {SvgXml} from 'react-native-svg';
import CircleStat from './CircleStat';
import {batteryXml, fluidXml} from '../../assets/icons/iconXml';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const dummy = [
  {
    name: 'Hama A',
    count: 2,
    color: 'red',
    // legendFontColor: '#7F7F7F',
    // legendFontSize: 12,
  },
  {
    name: 'Hama B',
    count: 2,
    color: 'green',
    // legendFontColor: '#7F7F7F',
    // legendFontSize: 12,
  },
  {
    name: 'Hama C',
    count: 2,
    color: 'blue',
    // legendFontColor: '#7F7F7F',
    // legendFontSize: 12,
  },
];

export default function HomeScreen(): React.JSX.Element {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={{gap: 16, padding: 16}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#737373'}}>Pembaruan terakhir: 05:30</Text>
          <Pressable
            onPress={() => null}
            style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0}]}>
            <Text style={{color: '#3b82f6', fontWeight: '500'}}>Refresh</Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', gap: 16}}>
          <View style={[widget.base, widget.square]}>
            <CircleStat value={90} accentColor="#22c55e" />
            <View style={chart.body}>
              <SvgXml xml={batteryXml} width="20" height="20" />
              <Text style={chart.data}>90</Text>
              <Text style={chart.label}>% battery</Text>
            </View>
          </View>
          <View style={[widget.base, widget.square]}>
            <CircleStat value={90} accentColor="#22c55e" />
            <View style={chart.body}>
              <SvgXml xml={fluidXml} width="20" height="20" />
              <Text style={chart.data}>90</Text>
              <Text style={chart.label}>% cairan</Text>
            </View>
          </View>
        </View>
        <View style={[widget.base]}>
          <Text
            style={{
              marginTop: 16,
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 16,
              color: '#000',
            }}>
            Presentase Hama
          </Text>
          <PieChart
            data={dummy}
            width={screenWidth - 64}
            height={200}
            chartConfig={chartConfig}
            accessor={'count'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
            center={[0, 0]}
            absolute
          />
        </View>
      </View>
    </ScrollView>
  );
}

const chart = StyleSheet.create({
  body: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  label: {
    color: '#71717a',
    fontWeight: '500',
    height: 20,
  },
  data: {
    color: 'black',
    fontWeight: '900',
    fontSize: 48,
    marginVertical: -4,
  },
});

const widget = StyleSheet.create({
  base: {
    borderRadius: 16,
    backgroundColor: 'white',
    flex: 1,
    elevation: 5,
  },
  square: {
    aspectRatio: 1 / 1,
  },
});
