import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const fruitData = {
  apple: {
    name: 'Apple',
    image: require('../../assets/images/fruits/apple.png'),
    description: 'Apples are sweet and crunchy fruits, often red or green in color.',
    benefits: ['High in fiber', 'Supports heart health', 'Good for weight management'],
    nutrition: { calories: 95, vitaminC: '14%', fiber: '4g', sugar: '19g' },
  },
  banana: {
    name: 'Banana',
    image: require('../../assets/images/fruits/banana.png'),
    description: 'Bananas are energy-rich fruits packed with potassium.',
    benefits: ['Boosts energy', 'Regulates blood pressure', 'Supports digestion'],
    nutrition: { calories: 105, vitaminC: '17%', fiber: '3g', sugar: '14g' },
  },
  orange: {
    name: 'Orange',
    image: require('../../assets/images/fruits/orange.png'),
    description: 'Oranges are citrus fruits rich in vitamin C and antioxidants.',
    benefits: ['Strengthens immunity', 'Promotes clear skin', 'Reduces inflammation'],
    nutrition: { calories: 62, vitaminC: '92%', fiber: '3g', sugar: '12g' },
  },
  grapes: {
    name: 'Grapes',
    image: require('../../assets/images/fruits/grapes.png'),
    description: 'Grapes are juicy and sweet, often used to make wine.',
    benefits: ['Rich in antioxidants', 'Supports brain health', 'Improves circulation'],
    nutrition: { calories: 69, vitaminC: '6%', fiber: '1g', sugar: '15g' },
  },
  pineapple: {
    name: 'Pineapple',
    image: require('../../assets/images/fruits/pineapple.png'),
    description: 'Pineapples are tropical fruits known for their sweet and tangy taste.',
    benefits: ['Anti-inflammatory', 'Boosts immunity', 'Aids digestion'],
    nutrition: { calories: 82, vitaminC: '131%', fiber: '2g', sugar: '16g' },
  },
  watermelon: {
    name: 'Watermelon',
    image: require('../../assets/images/fruits/watermelon.png'),
    description: 'Watermelons are hydrating fruits perfect for summer.',
    benefits: ['Keeps you hydrated', 'Supports skin health', 'Improves blood flow'],
    nutrition: { calories: 46, vitaminC: '21%', fiber: '0.6g', sugar: '9g' },
  },
  cherry: {
    name: 'Cherry',
    image: require('../../assets/images/fruits/cherries.png'),
    description: 'Cherries are small, red fruits known for their antioxidants.',
    benefits: ['Improves sleep', 'Reduces inflammation', 'Supports joint health'],
    nutrition: { calories: 50, vitaminC: '12%', fiber: '1.6g', sugar: '8g' },
  },
  strawberry: {
    name: 'Strawberry',
    image: require('../../assets/images/fruits/strawberry.png'),
    description: 'Strawberries are juicy berries rich in vitamin C and antioxidants.',
    benefits: ['Fights aging', 'Boosts immunity', 'Promotes heart health'],
    nutrition: { calories: 49, vitaminC: '149%', fiber: '3g', sugar: '7g' },
  },
  kiwi: {
    name: 'Kiwi',
    image: require('../../assets/images/fruits/kiwi.png'),
    description: 'Kiwi is a tangy green fruit packed with nutrients.',
    benefits: ['Aids digestion', 'Improves skin texture', 'Strengthens immunity'],
    nutrition: { calories: 42, vitaminC: '71%', fiber: '2g', sugar: '6g' },
  },
  mango: {
    name: 'Mango',
    image: require('../../assets/images/fruits/mango.png'),
    description: 'Mangoes are juicy tropical fruits called the "king of fruits".',
    benefits: ['Boosts immunity', 'Promotes eye health', 'Improves digestion'],
    nutrition: { calories: 99, vitaminC: '67%', fiber: '3g', sugar: '23g' },
  },
  papaya: {
    name: 'Papaya',
    image: require('../../assets/images/fruits/papaya.png'),
    description: 'Papayas are tropical fruits that are excellent for digestion.',
    benefits: ['Improves digestion', 'Reduces inflammation', 'Protects against aging'],
    nutrition: { calories: 59, vitaminC: '157%', fiber: '2.5g', sugar: '9g' },
  },
  pomegranate: {
    name: 'Pomegranate',
    image: require('../../assets/images/fruits/pomegranate.png'),
    description: 'Pomegranates are jewel-like fruits loaded with antioxidants.',
    benefits: ['Improves memory', 'Lowers blood pressure', 'Boosts heart health'],
    nutrition: { calories: 83, vitaminC: '17%', fiber: '4g', sugar: '13g' },
  },
  blueberry: {
    name: 'Blueberry',
    image: require('../../assets/images/fruits/blueberry.png'),
    description: 'Blueberries are tiny, powerful berries rich in antioxidants.',
    benefits: ['Boosts brain function', 'Fights aging', 'Supports digestion'],
    nutrition: { calories: 57, vitaminC: '16%', fiber: '2.4g', sugar: '10g' },
  },
  pear: {
    name: 'Pear',
    image: require('../../assets/images/fruits/pear.png'),
    description: 'Pears are soft and juicy fruits with high fiber content.',
    benefits: ['Supports gut health', 'Controls blood sugar', 'Aids weight loss'],
    nutrition: { calories: 101, vitaminC: '12%', fiber: '6g', sugar: '17g' },
  },
  lemon: {
    name: 'Lemon',
    image: require('../../assets/images/fruits/lemon.png'),
    description: 'Lemons are citrus fruits known for their sour taste and vitamin C.',
    benefits: ['Aids digestion', 'Detoxifies the body', 'Brightens skin'],
    nutrition: { calories: 29, vitaminC: '88%', fiber: '2.8g', sugar: '2.5g' },
  },
}

export default function FruitModal() {
  const { name } = useLocalSearchParams()
  const router = useRouter()
  const fruit = fruitData[name]

  if (!fruit) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Fruit not found</Text>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Go Back</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={fruit.image} style={styles.image} />
        <Text style={styles.title}>{fruit.name}</Text>
        <Text style={styles.description}>{fruit.description}</Text>

        <Text style={styles.section}>🥗 Health Benefits</Text>
        {fruit.benefits.map((benefit, index) => (
          <Text key={index} style={styles.bullet}>• {benefit}</Text>
        ))}

        <Text style={styles.section}>🌟 Nutrition</Text>
        <View style={styles.nutrition}>
          <Text style={styles.nutriItem}>Calories: {fruit.nutrition.calories}</Text>
          <Text style={styles.nutriItem}>Vitamin C: {fruit.nutrition.vitaminC}</Text>
          <Text style={styles.nutriItem}>Fiber: {fruit.nutrition.fiber}</Text>
          <Text style={styles.nutriItem}>Sugar: {fruit.nutrition.sugar}</Text>
        </View>
      </ScrollView>


      <View style={styles.bottomBar}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Close</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a23',
  },
  scrollContent: {
    padding: 24,
    paddingTop: 100,
    paddingBottom: 100,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#0a0a23',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
    color: '#ff2e63',
  },
  description: {
    fontSize: 16,
    color: '#ccc', 
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#ff2e63', 
    alignSelf: 'flex-start',
  },
  bullet: {
    fontSize: 15,
    color: '#eee',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  nutrition: {
    alignSelf: 'flex-start',
    gap: 6,
    color: '#fff'
  },
  nutriItem: {
    fontSize: 15,
    color: '#fff',
  },
  bottomBar: {
    padding: 16,
    borderTopWidth: 1,
    marginBottom: 100,
    borderColor: '#444',
    backgroundColor: '#0a0a23',
  },
  backButton: {
    backgroundColor: '#ff2e63',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
