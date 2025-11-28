import React, { forwardRef } from 'react';

const EmploymentLetterTemplate = forwardRef(({ data }, ref) => {
  return (
    <div 
      ref={ref} 
      style={{
        width: '794px',  // A4 width at 96dpi
        height: '1123px', // A4 height at 96dpi  
        backgroundColor: 'white',
        padding: '80px 60px',
        fontFamily: "Times New Roman, serif",
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.5'
      }}
    >
      {/* Letterhead */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '50px',
        paddingBottom: '30px',
        borderBottom: '2px solid #000'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {data.universityName}
        </div>
        <div style={{ fontSize: '14px', color: '#000', marginBottom: '4px', fontWeight: '500' }}>
          Office of Human Resources
        </div>
        <div style={{ fontSize: '12px', color: '#000', marginBottom: '8px' }}>
          {data.universityAddress}
        </div>
        <div style={{ fontSize: '12px', color: '#000' }}>
          Tel: (555) 123-4500 | Fax: (555) 123-4501 | Email: hr@{data.universityName.toLowerCase().replace(/\s+/g, '')}.edu
        </div>
      </div>

      {/* Date and Reference */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', fontSize: '12px' }}>
        <div>
          <div style={{ marginBottom: '8px' }}>
            <strong>Date:</strong> {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div>
            <strong>Reference No:</strong> HR-{new Date().getFullYear()}-{Math.floor(Math.random() * 10000)}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ marginBottom: '8px' }}>
            <strong>Employee ID:</strong> {data.employeeID}
          </div>
          <div>
            <strong>Prepared by:</strong> {data.officials?.hr}
          </div>
        </div>
      </div>

      {/* Salutation */}
      <div style={{ marginBottom: '30px', fontSize: '14px' }}>
        To Whom It May Concern:
      </div>

      {/* Subject Line */}
      <div style={{ marginBottom: '25px', textAlign: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'underline' }}>
          EMPLOYMENT VERIFICATION
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, fontSize: '14px', lineHeight: 1.6 }}>
        <div style={{ marginBottom: '25px' }}>
          This is to certify that <strong>{data.teacherFullName}</strong> is currently employed as a 
          full-time faculty member at {data.universityName}. This verification is being issued at the 
          employee's request for official purposes.
        </div>

        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', textAlign: 'center' }}>
            EMPLOYMENT DETAILS
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000' }}>
            <tbody>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', width: '35%', border: '1px solid #000' }}>Full Name:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.teacherFullName}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>Employee ID:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.employeeID}</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>Position/Title:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.position}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>Department:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.department}</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>College/School:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.college}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>Employment Status:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>Full-time Faculty Member</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>Date of Appointment:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.hireDate}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>Office Location:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.office}</td>
              </tr>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>Contact Phone:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.phone}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: 'bold', border: '1px solid #000' }}>University Email:</td>
                <td style={{ padding: '10px', border: '1px solid #000' }}>{data.email}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <strong>Primary Teaching Areas:</strong><br />
          The faculty member teaches courses in the {data.department} department, with primary 
          responsibilities in the following subject areas:
        </div>

        <div style={{ marginBottom: '25px', marginLeft: '20px' }}>
          <ul style={{ paddingLeft: '20px' }}>
            {data.subjects && data.subjects.map((subject, index) => (
              <li key={index} style={{ marginBottom: '3px' }}>• {subject}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <strong>Employment Status & Performance:</strong><br />
          {data.teacherFullName} maintains active employment status and is in good standing with 
          the university. Their performance meets all institutional standards and expectations. 
          There are no pending disciplinary actions or performance concerns on record.
        </div>

        <div style={{ marginBottom: '25px' }}>
          This verification letter is issued for official purposes at the employee's request. 
          The information contained herein is accurate as of the date of issuance. For any 
          additional verification or clarification, please contact the Human Resources Department 
          directly at the coordinates provided above.
        </div>
      </div>

      {/* Closing */}
      <div style={{ marginBottom: '40px', fontSize: '14px' }}>
        <div style={{ marginBottom: '8px' }}>Respectfully yours,</div>
      </div>

      {/* Signature */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginBottom: '40px'
      }}>
        <div>
          <div style={{ 
            borderBottom: '1px solid #000', 
            width: '300px', 
            marginBottom: '8px',
            height: '40px'
          }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {data.officials?.hr}
          </div>
          <div style={{ fontSize: '12px', marginBottom: '4px' }}>
            Director, Human Resources
          </div>
          <div style={{ fontSize: '12px' }}>
            {data.universityName}
          </div>
          <div style={{ fontSize: '11px', marginTop: '8px' }}>
            Direct: (555) 123-4502<br />
            Email: {data.officials?.hr?.toLowerCase().replace(/\s+/g, '.')}@{data.universityName?.toLowerCase().replace(/\s+/g, '')}.edu
          </div>
        </div>
        
        <div style={{ textAlign: 'right', fontSize: '12px' }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
            OFFICIAL SEAL
          </div>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            border: '2px solid #000', 
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            {data.universityAbbr}<br />
            OFFICIAL<br />
            SEAL
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        borderTop: '2px solid #000',
        paddingTop: '15px',
        fontSize: '10px',
        color: '#000',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '4px', fontWeight: 'bold' }}>
          CONFIDENTIAL EMPLOYMENT VERIFICATION
        </div>
        <div>
          This verification is issued for official purposes only and contains confidential employment information. 
          Unauthorized use or reproduction is prohibited.
        </div>
        <div style={{ marginTop: '8px' }}>
          For verification authenticity, contact HR Department: (555) 123-4500 | Reference: {data.employeeID}
        </div>
      </div>
    </div>
  );
});

export default EmploymentLetterTemplate;
