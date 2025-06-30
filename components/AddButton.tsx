import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function AddButton() {
  return (
    <TouchableOpacity
      className="bg-background border border-olive mx-4 py-2 px-3 rounded-lg self-start active:bg-olive"
    >
      <Text className="text-olive text-sm font-semibold active:text-background">Add to Cart</Text>
    </TouchableOpacity>
  )
}
