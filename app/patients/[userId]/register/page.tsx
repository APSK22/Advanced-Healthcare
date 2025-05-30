import Image from 'next/image';
// import * as Sentry from '@sentry/nextjs';

import { getUser } from '@/lib/actions/patient.actions';
import RegisterForm from '@/components/forms/RegisterForm';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  // Sentry.metrics.set('user_view_register', user.name);

  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | PasskeyModal */}
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-a flex-col py-10">
          <Image
            src="/assets/icons/ARMS.png"
            width={1000}
            height={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 ARMS</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
