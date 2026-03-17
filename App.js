import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador</Text>

      {/* Time Nós */}
      <View style={styles.timeContainer}>
        <Text style={styles.nomeTime}>Nó</Text>
        <Text style={styles.pontos}>{nos}</Text>

        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setNos(nos - 1)}
          >
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setNos(nos + 1)}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Time Eles */}
      <View style={styles.timeContainer}>
        <Text style={styles.nomeTime}>Eles</Text>
        <Text style={styles.pontos}>{eles}</Text>

        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setEles(eles - 1)}
          >
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setEles(eles + 1)}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    marginBottom: 30,
  },
  timeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  nomeTime: {
    fontSize: 22,
  },
  pontos: {
    fontSize: 40,
    marginVertical: 10,
  },
  botoes: {
    flexDirection: 'row',
  },
  botao: {
    backgroundColor: '#ddd',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  textoBotao: {
    fontSize: 24,
  },
});