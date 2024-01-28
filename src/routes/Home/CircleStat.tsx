/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

type CircleStatProps = {
  value: number;
  accentColor: string;
};

export default function CircleStat({
  value,
  accentColor,
}: CircleStatProps): React.JSX.Element {
  return (
    <View style={{padding: 12, flex: 1}}>
      <Svg viewBox="0 0 36 36">
        <Path
          fill="none"
          stroke="#e4e4e7"
          strokeWidth={2.8}
          strokeLinecap="round"
          strokeDasharray={100}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <Path
          fill="none"
          stroke={accentColor}
          strokeWidth={2.8}
          strokeLinecap="round"
          strokeDasharray={[value, 100]}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </Svg>
    </View>
  );
}
