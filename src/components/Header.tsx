import {Text, View} from 'react-native';

export default function Header(): React.JSX.Element {
  return (
    <View style={{backgroundColor: '#2563eb', padding: 16}}>
      <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>
        AntisectaBot
      </Text>
    </View>
  );
}
