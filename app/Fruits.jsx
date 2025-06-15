import { useRouter } from 'expo-router'
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const fruits = [
  { name: 'apple', image: require('../assets/images/fruits/apple.png') },
  { name: 'banana', image: require('../assets/images/fruits/banana.png') },
  { name: 'orange', image: require('../assets/images/fruits/orange.png') },
  { name: 'grapes', image: require('../assets/images/fruits/grapes.png') },
  { name: 'pineapple', image: require('../assets/images/fruits/pineapple.png') },
  { name: 'watermelon', image: require('../assets/images/fruits/watermelon.png') },
  { name: 'cherry', image: require('../assets/images/fruits/cherries.png') },
  { name: 'strawberry', image: require('../assets/images/fruits/strawberry.png') },
  { name: 'kiwi', image: require('../assets/images/fruits/kiwi.png') },
  { name: 'mango', image: require('../assets/images/fruits/mango.png') },
  { name: 'papaya', image: require('../assets/images/fruits/papaya.png') },
  { name: 'pomegranate', image: require('../assets/images/fruits/pomegranate.png') },
  { name: 'blueberry', image: require('../assets/images/fruits/blueberry.png') },
  { name: 'pear', image: require('../assets/images/fruits/pear.png') },
  { name: 'lemon', image: require('../assets/images/fruits/lemon.png') },
]

export default function FruitList() {
  const router = useRouter()
  const screenWidth = Dimensions.get('window').width
  const cardSize = (screenWidth - 48) / 2 // margin + spacing

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍉 Funky Fruits</Text>

      <FlatList
        data={fruits}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.card,
              {
                width: cardSize,
                backgroundColor: index % 2 === 0 ? '#870123' : '#130b42',
              },
            ]}
            onPress={() => router.push(`/modal/${item.name}`)}
          >
            <Image source={item.image} style={styles.icon} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a23',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#f5c7f7',
    textAlign: 'center',
    marginBottom: 25,
    letterSpacing: 1.5,
  },
  listContent: {
    paddingBottom: 30,
  },
  card: {
    marginBottom: 20,
    borderRadius: 20,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
})
