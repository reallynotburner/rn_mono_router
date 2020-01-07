import React, { useEffect } from 'react';
import { Button, Platform, StyleSheet, TVEventHandler, View } from 'react-native';
import { BackButton, Route, Router, Switch } from './Router';

interface androidKeyEvent {
  eventType: 'up' | 'down' | 'left' | 'right',
  eventKeyAction: Number
}

interface webKeyEvent {
  which: Number
}

const webKeyboardListener = (event: webKeyEvent) => {
  console.log('XXXXXXXXX keyboard event KEYYYBOARD LISTENER', event.which);
};

const keyboardEffect = Platform.select({
  android: () => {
    let handler = new TVEventHandler();
    handler.enable(null, (component: React.Component, {eventKeyAction, eventType}: androidKeyEvent) => {
      eventKeyAction === 0 ? console.log('XXXXXXXXX', eventType) : null;
    });
    return () => {
      handler.disable();
      handler = null;
    }
  },
  web: () => {
    window.addEventListener('keydown', webKeyboardListener);
    return () => {
      window.removeEventListener('keydown', webKeyboardListener);
    }
  }
});

const One: React.FC = ({ history }: any) => {
  useEffect(keyboardEffect);

  return (
    <View style={styles.one}>
      <Button title="Go to Two" onPress={() => history.push("/two")}></Button>
    </View>
  )
}
const Two: React.FC = ({ history }: any) => {
  useEffect(keyboardEffect);

  return (
    <View style={styles.two}>
      <Button title="go to one" onPress={() => history.push("/")}></Button>
    </View>
  )
}

const Routes = () => {
  return (
    <Router>
      <BackButton />
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