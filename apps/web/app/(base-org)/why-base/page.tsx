import { Divider } from 'apps/web/src/components/Divider/Divider';
import Hero from 'apps/web/src/components/WhyBase/Hero';
import ActiveCommunityOfBuilders from 'apps/web/src/components/WhyBase/ActiveCommunityOfBuilders';
import PerformanceAndCost from 'apps/web/src/components/WhyBase/PerformanceAndCost';
import EvmEquivalent from 'apps/web/src/components/WhyBase/EvmEquivalent';
import WorldclassResources from 'apps/web/src/components/WhyBase/WorldclassResources';
import EmpoweredByCoinbase from 'apps/web/src/components/WhyBase/EmpoweredByCoinbase';
import BuildWithUs from 'apps/web/src/components/WhyBase/BuildWithUs';

import WhyBaseHeroBackground from 'apps/web/src/components/WhyBase/why-base-hero-bg.png';

export default async function WhyBase() {
  const backgroundStyles = {
    backgroundImage: `url('${WhyBaseHeroBackground.src}')`,
  };
  return (
    <>
      <Hero />
      <main className="flex w-full flex-col items-center bg-black font-display text-white">
        <ActiveCommunityOfBuilders />
        <Divider />
        <PerformanceAndCost />
        <Divider />
        <EvmEquivalent />
        <Divider />
        <WorldclassResources />
        <Divider />
        <EmpoweredByCoinbase />
        <Divider />
        <BuildWithUs />
      </main>
    </>
  );
}