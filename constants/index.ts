export const GenderOptions = ['male', 'female'];

export const PatientFormDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: new Date(Date.now()),
  gender: 'male' as Gender,
  address: '',
  occupation: '',
  emergencyContactName: '',
  emergencyContactNumber: '',
  primaryPhysician: '',
  insuranceProvider: '',
  insurancePolicyNumber: '',
  allergies: '',
  currentMedication: '',
  familyMedicalHistory: '',
  pastMedicalHistory: '',
  identificationType: 'Birth Certificate',
  identificationNumber: '',
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "Aadhar Card",
  "Passport",
  "PAN Card",
  "Ration Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Rajesh Verma (Cardiologist)",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Aisha Khan (Dermatologist)",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Arjun Mehta (Neurologist)",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Vikram Kapoor (Orthopedic Surgeon)",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Priya Deshmukh (Pediatrician)",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Aditya Menon (Oncologist)",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Anjali Iyer (Endocrinologist)",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Pooja Nair (Psychiatrist)",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma (General Surgeon)",
  },
];



export const StatusIcon = {
  scheduled: '/assets/icons/check.svg',
  pending: '/assets/icons/pending.svg',
  cancelled: '/assets/icons/cancelled.svg',
};
