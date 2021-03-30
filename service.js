import TrackPlayer from 'react-native-track-player';

module.exports = async function() {

    await TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

    await TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

    await TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

    await TrackPlayer.addEventListener('remote-next', () => TrackPlayer.skipToNext());

    await TrackPlayer.addEventListener('remote-previous', () => TrackPlayer.skipToPrevious());

    await TrackPlayer.addEventListener('remote-seek', (event) => {
        TrackPlayer.seekTo(event.position);
      });
};