import { useRouter } from 'expo-router'
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function GetStarted() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <Image
        source={require('../assets/images/fruits/bg.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
        blurRadius={8}
      />

      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.brand}>Fruitly</Text>
        </Text>
        <Text style={styles.subtitle}>
          Discover nutritional benefits, fun facts, and more about your favorite fruits.
        </Text>
      </View>


      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/Fruits')}>
          <Text style={styles.buttonText}>Get Started 🍓</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    zIndex: -2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: -1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 100, 
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  brand: {
    color: '#ff2e63', 
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 26,
  },
  bottomButtonContainer: {
    position: 'absolute',
    top:480,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0a0a23', 
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#ff2e63',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#ff2e63',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
})
