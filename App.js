import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);

  const [vitoriasNos, setVitoriasNos] = useState(0);
  const [vitoriasEles, setVitoriasEles] = useState(0);

  const verificarVitoria = (pontosNos, pontosEles) => {
    if (pontosNos >= 12) {
      setVitoriasNos(vitoriasNos + 1);
      setNos(0);
      setEles(0);
    } else if (pontosEles >= 12) {
      setVitoriasEles(vitoriasEles + 1);
      setNos(0);
      setEles(0);
    }
  };

  const adicionarPontos = (time, pontos) => {
    if (time === 'nos') {
      const novo = nos + pontos;
      setNos(novo);
      verificarVitoria(novo, eles);
    } else {
      const novo = eles + pontos;
      setEles(novo);
      verificarVitoria(nos, novo);
    }
  };

  // 🔄 Reiniciar (zera pontos)
  const reiniciarPartida = () => {
    setNos(0);
    setEles(0);
  };

  // 🆕 Novo jogo (zera tudo)
  const novoJogo = () => {
    setNos(0);
    setEles(0);
    setVitoriasNos(0);
    setVitoriasEles(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador de Truco</Text>

      {/* NÓS */}
      <View style={styles.card}>
        <Text style={styles.nomeTime}>Nós</Text>
        <Text style={styles.pontos}>{nos}</Text>

        <View style={styles.botoesLinha}>
          <TouchableOpacity style={styles.botao} onPress={() => setNos(nos - 1)}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => setNos(nos + 1)}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.apostas}>
          <TouchableOpacity style={styles.aposta} onPress={() => adicionarPontos('nos', 3)}>
            <Text style={styles.textoAposta}>Truco (3)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.aposta} onPress={() => adicionarPontos('nos', 6)}>
            <Text style={styles.textoAposta}>Seis (6)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.aposta} onPress={() => adicionarPontos('nos', 9)}>
            <Text style={styles.textoAposta}>Nove (9)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.aposta} onPress={() => adicionarPontos('nos', 12)}>
            <Text style={styles.textoAposta}>Doze (12)</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.vitorias}>Vitórias: {vitoriasNos}</Text>
      </View>

      {/* ELES */}
      <View style={styles.card}>
        <Text style={styles.nomeTime}>Eles</Text>
        <Text style={styles.pontos}>{eles}</Text>

        <View style={styles.botoesLinha}>
          <TouchableOpacity style={styles.botao} onPress={() => setEles(eles - 1)}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => setEles(eles + 1)}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.apostas}>
          <TouchableOpacity style={styles.aposta} onPress={() => adicionarPontos('eles', 3)}>
            <Text style={styles.textoAposta}>Truco (3)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.aposta} onPress={() => adicionarPontos('eles', 6)}>
            <Text style={styles.textoAposta}>Seis (6)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.aposta} onPress={() => adicionarPontos('eles', 9)}>
            <Text style={styles.textoAposta}>Nove (9)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.aposta} onPress={() => adicionarPontos('eles', 12)}>
            <Text style={styles.textoAposta}>Doze (12)</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.vitorias}>Vitórias: {vitoriasEles}</Text>
      </View>

      {/* CONTROLES */}
      <View style={styles.controles}>
        <TouchableOpacity style={styles.botaoControle} onPress={reiniciarPartida}>
          <Text style={styles.textoControle}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoControle} onPress={novoJogo}>
          <Text style={styles.textoControle}>Novo Jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1e293b',
    width: '100%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  nomeTime: {
    fontSize: 22,
    color: '#38bdf8',
    fontWeight: 'bold',
  },
  pontos: {
    fontSize: 48,
    color: '#fff',
    marginVertical: 10,
  },
  botoesLinha: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#334155',
    padding: 12,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 22,
  },
  apostas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  aposta: {
    backgroundColor: '#22c55e',
    padding: 8,
    borderRadius: 6,
    margin: 5,
  },
  textoAposta: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  vitorias: {
    marginTop: 10,
    color: '#facc15',
    fontSize: 16,
    fontWeight: 'bold',
  },
  controles: {
    flexDirection: 'row',
    marginTop: 10,
  },
  botaoControle: {
    backgroundColor: '#ef4444',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  textoControle: {
    color: '#fff',
    fontWeight: 'bold',
  },
});