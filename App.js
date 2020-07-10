import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import StartSelector from './Componentes/LoginRegistro/StartSelector';

export default function App() {
  return (
    <Provider store={Store}>
      <StartSelector/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
