import dynamic from 'next/dynamic';
import { useRef } from 'react';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

import NavBar from '../components/Navigationbar';
import Footerbar from '@/components/Footerbar';
import LandingpageSectionOne from '@/components/LandingPageSectionOne';
import LandingPageSectionTwo from '@/components/LandingPageSectionTwo';

export default function startEngine() {
  return (
    <div>
      <NavBar />
      <LandingpageSectionOne />
      <LandingPageSectionTwo />
      <Footerbar />
    </div>
  );
}
