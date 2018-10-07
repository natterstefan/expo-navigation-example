/* @flow */
/* eslint-disable react/no-unused-state */
import * as React from 'react'
import { ScrollView, View, Image, Dimensions, StyleSheet } from 'react-native'
import { BottomNavigation } from 'react-native-paper'

type State = {
  index: number,
  routes: Array<{
    key: string,
    title: string,
    icon: string,
    color: string,
  }>,
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  item: {
    height: Dimensions.get('window').width / 2,
    width: '50%',
    padding: 4,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
})

type PhotoGalleryProps = {
  route: any,
}

const PhotoGallery = (props: PhotoGalleryProps) => {
  const PHOTOS = Array.from({ length: 24 }).map(
    (_, i) => `https://unsplash.it/300/300/?random&__id=${props.route.key}${i}`,
  )

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {PHOTOS.map(uri => (
        <View key={uri} style={styles.item}>
          <Image source={{ uri }} style={styles.photo} />
        </View>
      ))}
    </ScrollView>
  )
}

class Home extends React.Component<{}, State> {
  static navigationOptions = {
    title: 'Home',
  }

  state = {
    index: 0,
    routes: [
      { key: 'album', title: 'Album', icon: 'photo-album', color: '#fff' },
      {
        key: 'library',
        title: 'Library',
        icon: 'photo-library',
        color: '#fff',
      },
      { key: 'recents', title: 'Recents', icon: 'history', color: '#fff' },
    ],
  }

  _handleIndexChange = (index: number) => this.setState({ index })

  // TODO: read more about performance (eg. shouldComponentUpdate):
  // https://callstack.github.io/react-native-paper/bottom-navigation.html#renderScene
  _renderScene = BottomNavigation.SceneMap({
    album: PhotoGallery,
    library: PhotoGallery,
    recents: PhotoGallery,
  })

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    )
  }
}

export default Home
