import React from 'react'
import DeepIntegration from '@/app/components/Product/OpenPlatform/DeepIntegration'
import OpenPlatformBanner from '@/app/components/Product/OpenPlatform/OpenPlatformBanner'
import ToolsAndResources from '@/app/components/Product/OpenPlatform/ToolsAndResources'
import AllSolutions from '@/app/components/Product/OpenPlatform/AllSolutions'
import CooperateAndGrow from '@/app/components/Product/OpenPlatform/CooperateAndGrow'

const page = () => {
  return (
    <div className="space-y-28">
      <OpenPlatformBanner/>
      <DeepIntegration/>
      <ToolsAndResources/>
      <AllSolutions/>
      <CooperateAndGrow/>
    </div>
  )
}

export default page