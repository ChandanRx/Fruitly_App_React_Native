import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown:false
      }} />
      <Stack.Screen name="Fruits" options={{
        headerShown:false
      }} />
      <Stack.Screen
        name="modal/[name]"
        options={{
          presentation: 'modal', 
          headerShown: false,    
          animation:'slide_from_bottom'
        }}
      />
    </Stack>
  )
}
