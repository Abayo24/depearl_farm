import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import TextHeader from '@/components/TextHeader'

export default function trackOrder() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
        <TextHeader title='Track Order'/>
    </SafeAreaView>
  )
}