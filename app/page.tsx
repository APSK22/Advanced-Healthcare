import Link from 'next/link';
import Image from 'next/image';

import PasskeyModal from '@/components/PasskeyModal';
import { PatientForm } from '@/components/forms/PatientForm';

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="relative flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center justify-between mb-12">
            <Image
              src="/assets/icons/ARMS.png"
              width={200}  // Adjusted width for better placement
              height={100}
              alt="logo"
              className="h-10 w-fit"
            />
            
            {/* Disease Prediction Button */}
             <a
              href="https://minorwebappproject-klnen7bcur6jknr4spwfal.streamlit.app/"
              className="px-4 py-2 bg-red-700 text-white rounded-xl shadow-md  transition-all duration-1000 ease-in-out hover:shadow-white "
              target="_blank"
            >
              Disease Prediction using ML
            </a> 
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 ARMS
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding1.jpg"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
      
    </div>
  );
}
