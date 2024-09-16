import Image from 'next/image';
import * as Sentry from '@sentry/nextjs';

import { getPatient } from '@/lib/actions/patient.actions';
import AppointmentForm from '@/components/forms/AppointmentForm';

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  Sentry.metrics.set('user_view_new-appointment', patient.name);

  return (
    <div className="flex h-screen max-h-screen">
      {/* Disease Prediction button */}
      <a
      href="https://multiple-disease-prediction-webapp1.streamlit.app/" // Replace with your actual link
      className="absolute top-4 right-4 px-4 py-2 bg-red-700 text-white rounded-lg shadow-md transition-all duration-1000 ease-in-out  hover:shadow-white animate"
      target="_blank"
    >
      Disease Prediction using ML
    </a>
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/ARMS.png"
            width={1000}
            height={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright mt-10 py-12">© 2024 ARMS</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        width={1000}
        height={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
