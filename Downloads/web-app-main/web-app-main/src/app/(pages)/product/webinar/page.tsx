import React from 'react'
import WebinarBanner from '@/app/components/Product/Webinar/WebinarBanner'
import EventManagement from '@/app/components/Product/Webinar/EventManagement'
import Analysis from '@/app/components/Product/Webinar/Analysis'
import Engagement from '@/app/components/Product/Webinar/Engagement'
import WebinarCommunication from '@/app/components/Product/Webinar/WebinarCommunication'

const page = () => {
  return (
    <div className="space-y-28">
        <WebinarBanner />
        <Analysis />
        <Engagement />
        <WebinarCommunication/>
        <EventManagement />

    </div>
  )
}

export default page