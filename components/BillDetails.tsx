import React from 'react'
import { View, Text } from 'react-native'

export default function BillDetails() {
  return (
    <View className="mt-6 p-4 rounded-lg border border-primary border-dashed mx-2">
          <Text className="font-subsubheading text-lg text-primary mb-2">Billing Details</Text>
          <View className="flex-row justify-between mb-4">
            <Text className="text-md font-body text-muted">Subtotal</Text>
            <Text className="text-md font-body text-muted">$214.25</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-md font-body text-muted">Delivery Charges</Text>
            <Text className="text-md font-body text-muted">$20.00</Text>
          </View>
          <View className="flex-row justify-between border-t border-gray-200 mt-2 pt-2">
            <Text className="text-base text-primary font-subsubheading">Total</Text>
            <Text className="text-base text-primary font-subsubheading">$194.25</Text>
          </View>
        </View>
  )
}

