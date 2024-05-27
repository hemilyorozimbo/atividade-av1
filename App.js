import {StatusBar} from 'export-status-bar'
import { Sylesheet, Text, Button, View } from 'react-native';
import hemily from './SRC/componentes/hemily';
import analu from './SRC/componentes/analu';
import anaclara from './SRC/componentes/anaclara';

export default function App() {
  return (
    <View style={styles.container}>
      <Hemily/>
      <Analu/>
      <Anaclara/>


    <Button
    title="Enviar"
    />

  <StatusBar style="alto"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67b79e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

