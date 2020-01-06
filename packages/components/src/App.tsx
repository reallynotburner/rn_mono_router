import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { BackButton, Route, Router, Switch } from './Router';


const One = ({ history }: any) => {
  return (
    <View style={styles.one}>
      <Button title="Go to Two" onPress={() => history.push("/two")}></Button>
    </View>
  )
}
const Two = ({ history }: any) => {
  return (
    <View style={styles.two}>
      <Button title="Go to One" onPress={() => history.push("/")}></Button>
    </View>
  )
}

const Routes = () => {
  return (
    <Router>
      <BackButton/>
      <Switch>
        <Route exact path="/" component={One} />
        <Route exact path="/two" component={Two} />
      </Switch>
    </Router>
  )
}

export function App() {
  return (
    <View style={styles.app}>
      <Routes></Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  one: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'green'
  },
  two: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red'
  },
  app: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'pink'
  },
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

declare var global: any