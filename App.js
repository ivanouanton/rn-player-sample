import React, {useEffect, useState} from 'react';

import {StyleSheet, TouchableOpacity, Text, View, ProgressViewIOS} from 'react-native';
import TrackPlayer from 'react-native-track-player';


const App = () => {
  useEffect(() => {
    setup_player()
  }, []);

  const [loopBtnTitleState, setLoopState] = useState('repeat');

  const setup_player = async () => {
    // Set up the player
   await TrackPlayer.setupPlayer();
   await TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_TOGGLEREPEATING,
      TrackPlayer.CAPABILITY_SEEK_TO,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
    ],
  });

   // Add a track to the queue
   await TrackPlayer.add({
     id: 'trackId',
     url: require('./src/music/tr1.mp3'),
     title: 'Dich',
     artist: 'Faraon',
     artwork: require('./src/img/sample.png'),
   });

   // Add a track to the queue
   await TrackPlayer.add({
    id: 'trackId',
    url: require('./src/music/tr2.mp3'),
    title: 'Dich1',
    artist: 'Faraon1',
    artwork: require('./src/img/sample.png'),
  });

  // Add a track to the queue
  await TrackPlayer.add({
    id: 'trackId',
    url: require('./src/music/tr3.mp3'),
    title: 'Dich2',
    artist: 'Faraon2',
    artwork: require('./src/img/sample.png'),
  });

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('./src/music/sample.mp3'),
      title: 'Dich3',
      artist: 'Faraon3',
      artwork: require('./src/img/sample.png'),
    });

     // Add a track to the queue
     await TrackPlayer.add({
      id: 'trackId',
      url: require('./src/music/tr5.mp3'),
      title: 'Dich3',
      artist: 'Faraon3',
      artwork: require('./src/img/sample.png'),
    });

      // Add a track to the queue
      await TrackPlayer.add({
        id: 'trackId',
        url: require('./src/music/tr6.mp3'),
        title: 'Dich3',
        artist: 'Faraon3',
        artwork: require('./src/img/sample.png'),
      });



  //  await TrackPlayer.add([track1, track2, track3]);
  };

  const start_music = async () => {
    // Start playing it
    await TrackPlayer.play();
  };

  const stop_music = async () => {
    // Stop playing it
    await TrackPlayer.pause();
  };

  const shuffle_music = async () => {
    // Stop playing it

    await TrackPlayer.toggleShuffle();

    const isShuffled = await TrackPlayer.isPlaylistShuffled();

    if (isShuffled) {
      alert( 'Очередь перемешана!' );
    } else {
      alert( 'Очередь в стоке!' );
    }
  };

  const prev_music = async () => {
    // Stop playing it
    await TrackPlayer.skipToPrevious();
  };

  const next_music = async () => {
    // Stop playing it
    await TrackPlayer.skipToNext();
  };

  const loop_queue = async () => {
    // Stop playing it
    setLoopState('test repeated');
    await TrackPlayer.toggleRepeating();
    const currentState = await TrackPlayer.getRepeatingState();

    console.log('handlePlayback: CURRENT STATE', currentState);

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={start_music}>
        <Text>play</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={stop_music}>
        <Text>pause</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={next_music}>
        <Text>next</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={prev_music}>
        <Text>prev</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={shuffle_music}>
        <Text>shuffle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={loop_queue}>
        <Text> {loopBtnTitleState} </Text>
      </TouchableOpacity>
    </View>
  );              
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  progress: {
    width: 200,
  },
});

export default App;
