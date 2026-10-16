export interface ConsultationInquiry {
  id: string;
  type: 'consultation' | 'internship' | 'contact';
  name: string;
  email: string;
  phone: string;
  companyOrCollege?: string;
  serviceOrArea?: string;
  graduationYear?: string;
  preferredTime?: string;
  message: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'contacted';
}

const STORAGE_KEY = 'nexivd_inquiries_db';

export function getInquiries(): ConsultationInquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with initial sample record so database view isn't empty
      const initial: ConsultationInquiry[] = [
        {
          id: 'INQ-1001',
          type: 'consultation',
          name: 'Dr. Ramesh Verma',
          email: 'ramesh.verma@biomedtech.com',
          phone: '+91 98481 23456',
          companyOrCollege: 'BioMed Tech Solutions',
          serviceOrArea: 'IVD Medical Device Verification & Validation',
          preferredTime: 'Morning (10:00 AM - 1:00 PM)',
          message: 'Interested in analytical validation and stability testing protocols for our new POCT strip.',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          status: 'reviewed'
        }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read inquiries from database', err);
    return [];
  }
}

export function saveInquiry(inquiry: Omit<ConsultationInquiry, 'id' | 'createdAt' | 'status'>): ConsultationInquiry {
  const all = getInquiries();
  const newRecord: ConsultationInquiry = {
    ...inquiry,
    id: `INQ-${Date.now().toString().slice(-4)}`,
    createdAt: new Date().toISOString(),
    status: 'new'
  };
  all.unshift(newRecord);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch (err) {
    console.error('Failed to save inquiry to database', err);
  }
  return newRecord;
}

export function triggerConsultationEmail(data: {
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceRequirement?: string;
  preferredTime?: string;
  message: string;
}) {
  const recipient = 'info@nexivdlabs.com';
  const cc = 'nexivdlabs@gmail.com';
  const subject = encodeURIComponent(`Consultation Request: ${data.name} - ${data.serviceRequirement || 'IVD Services'}`);
  const bodyText = `Dear NexIVD Team,

A new consultation request has been submitted with the following details:
- Full Name: ${data.name}
- Email: ${data.email}
- Phone Number: ${data.phone}
- Company / Organization: ${data.companyName || 'N/A'}
- Service Requirement: ${data.serviceRequirement || 'General IVD Consultancy'}
- Preferred Meeting Time: ${data.preferredTime || 'Flexible'}

Message / Project Scope:
${data.message}

---
Sent via NexIVD Laboratories Web Portal
Dispatched to: info@nexivdlabs.com (CC: nexivdlabs@gmail.com)`;

  const mailtoUrl = `mailto:${recipient}?cc=${encodeURIComponent(cc)}&subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  
  // Save to database
  saveInquiry({
    type: 'consultation',
    name: data.name,
    email: data.email,
    phone: data.phone,
    companyOrCollege: data.companyName,
    serviceOrArea: data.serviceRequirement,
    preferredTime: data.preferredTime,
    message: data.message
  });

  // Attempt window redirect to trigger native email client
  window.location.href = mailtoUrl;
}

export function triggerInternshipEmail(data: {
  name: string;
  email: string;
  phone: string;
  college: string;
  qualification: string;
  graduationYear: string;
  areaOfInterest: string;
  message: string;
}) {
  const recipients = 'info@nexivdlabs.com';
  const cc = 'nexivdlabs@gmail.com';
  const subject = encodeURIComponent(`Internship Application: ${data.name} (${data.graduationYear}) - ${data.areaOfInterest}`);
  const bodyText = `Dear HR & Academic Collaboration Committee,

A new internship/academic collaboration application has been submitted:
- Applicant Name: ${data.name}
- Email: ${data.email}
- Phone Number: ${data.phone}
- College / University: ${data.college}
- Degree / Qualification: ${data.qualification}
- Year of Study / Graduation Year: ${data.graduationYear}
- Area of Interest: ${data.areaOfInterest}

Statement of Purpose / Research Interests:
${data.message}

---
Sent via NexIVD Laboratories Academic Portal
Dispatched to: info@nexivdlabs.com & nexivdlabs@gmail.com`;

  const mailtoUrl = `mailto:${recipients}?cc=${encodeURIComponent(cc)}&subject=${subject}&body=${encodeURIComponent(bodyText)}`;

  // Save to database
  saveInquiry({
    type: 'internship',
    name: data.name,
    email: data.email,
    phone: data.phone,
    companyOrCollege: data.college,
    serviceOrArea: data.areaOfInterest,
    graduationYear: data.graduationYear,
    message: `${data.qualification} | ${data.message}`
  });

  window.location.href = mailtoUrl;
}
