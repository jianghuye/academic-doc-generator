import React, { forwardRef } from 'react';

const EmploymentLetterTemplate = forwardRef(({ data }, ref) => {
  return (
    <div 
      ref={ref} 
      style={{
        width: '595px',  // A4 width at 72dpi (8.5" x 72dpi)
        height: '842px', // A4 height at 72dpi (11.7" x 72dpi)
        backgroundColor: '#ffffff',
        padding: '60px 50px',
        fontFamily: "Times New Roman, serif",
        color: '#000000',
        display: 'block',
        boxSizing: 'border-box',
        lineHeight: '1.4',
        fontSize: '14px'
      }}
    >
      {/* Letterhead */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '1px solid #000000',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000', marginBottom: '6px', textTransform: 'uppercase' }}>
          {data.universityName}
        </div>
        <div style={{ fontSize: '12px', color: '#000000', marginBottom: '3px' }}>
          Office of Human Resources
        </div>
        <div style={{ fontSize: '11px', color: '#000000', marginBottom: '6px' }}>
          {data.universityAddress}
        </div>
        <div style={{ fontSize: '10px', color: '#000000' }}>
          Tel: (555) 123-4500 | Email: hr@{data.universityName?.toLowerCase().replace(/\s+/g, '')}.edu
        </div>
      </div>

      {/* Date and Reference */}
      <div style={{ marginBottom: '25px', fontSize: '11px', backgroundColor: '#ffffff' }}>
        <div style={{ marginBottom: '10px' }}>
          <strong>Date:</strong> {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Reference No:</strong> HR-{new Date().getFullYear()}-{Math.floor(Math.random() * 10000)}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Employee ID:</strong> {data.employeeID}
        </div>
        <div>
          <strong>Prepared by:</strong> {data.officials?.hr}
        </div>
      </div>

      {/* Salutation */}
      <div style={{ marginBottom: '20px', fontSize: '13px', backgroundColor: '#ffffff' }}>
        To Whom It May Concern:
      </div>

      {/* Subject Line */}
      <div style={{ marginBottom: '20px', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <div style={{ fontSize: '15px', fontWeight: 'bold', textDecoration: 'underline' }}>
          EMPLOYMENT VERIFICATION
        </div>
      </div>

      {/* Body */}
      <div style={{ marginBottom: '20px', fontSize: '13px', lineHeight: '1.5', backgroundColor: '#ffffff' }}>
        <div style={{ marginBottom: '25px' }}>
          This is to certify that <strong>{data.teacherFullName}</strong> is currently employed as a 
          full-time faculty member at {data.universityName}. This verification is being issued at the 
          employee's request for official purposes.
        </div>

        <div style={{ marginBottom: '20px', backgroundColor: '#ffffff' }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center', color: '#000000' }}>
            EMPLOYMENT DETAILS
          </div>
          <div style={{ border: '1px solid #000000', backgroundColor: '#ffffff' }}>
            <div style={{ padding: '6px', borderBottom: '1px solid #000000', backgroundColor: '#ffffff' }}>
              <strong>Full Name:</strong> {data.teacherFullName}
            </div>
            <div style={{ padding: '6px', borderBottom: '1px solid #000000', backgroundColor: '#ffffff' }}>
              <strong>Employee ID:</strong> {data.employeeID}
            </div>
            <div style={{ padding: '6px', borderBottom: '1px solid #000000', backgroundColor: '#ffffff' }}>
              <strong>Position:</strong> {data.position}
            </div>
            <div style={{ padding: '6px', borderBottom: '1px solid #000000', backgroundColor: '#ffffff' }}>
              <strong>Department:</strong> {data.department}
            </div>
            <div style={{ padding: '6px', borderBottom: '1px solid #000000', backgroundColor: '#ffffff' }}>
              <strong>College:</strong> {data.college}
            </div>
            <div style={{ padding: '6px', borderBottom: '1px solid #000000', backgroundColor: '#ffffff' }}>
              <strong>Employment Status:</strong> Full-time Faculty Member
            </div>
            <div style={{ padding: '6px', borderBottom: '1px solid #000000', backgroundColor: '#ffffff' }}>
              <strong>Date of Appointment:</strong> {data.hireDate}
            </div>
            <div style={{ padding: '6px', backgroundColor: '#ffffff' }}>
              <strong>Office:</strong> {data.office}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '15px', backgroundColor: '#ffffff', color: '#000000' }}>
          <strong>Primary Teaching Areas:</strong> The faculty member teaches courses in {data.department} department.
        </div>

        <div style={{ marginBottom: '15px', backgroundColor: '#ffffff', color: '#000000' }}>
          <strong>Employment Status:</strong> {data.teacherFullName} maintains active employment status 
          and is in good standing. No pending disciplinary actions on record.
        </div>

        <div style={{ marginBottom: '20px', backgroundColor: '#ffffff', color: '#000000' }}>
          This verification is issued for official purposes at the employee's request. 
          For additional verification, contact HR at (555) 123-4500.
        </div>
      </div>

      {/* Closing */}
      <div style={{ marginBottom: '25px', fontSize: '12px', backgroundColor: '#ffffff', color: '#000000' }}>
        <div>Respectfully yours,</div>
      </div>

      {/* Signature */}
      <div style={{ marginBottom: '30px', backgroundColor: '#ffffff' }}>
        <div style={{ 
          borderBottom: '1px solid #000000', 
          width: '200px', 
          marginBottom: '8px',
          height: '30px',
          backgroundColor: '#ffffff'
        }} />
        <div style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: '#ffffff', color: '#000000' }}>
          {data.officials?.hr}
        </div>
        <div style={{ fontSize: '11px', marginBottom: '2px', backgroundColor: '#ffffff', color: '#000000' }}>
          Director, Human Resources
        </div>
        <div style={{ fontSize: '11px', backgroundColor: '#ffffff', color: '#000000' }}>
          {data.universityName}
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        borderTop: '1px solid #000000',
        paddingTop: '10px',
        fontSize: '9px',
        color: '#000000',
        textAlign: 'center',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ marginBottom: '3px', fontWeight: 'bold', backgroundColor: '#ffffff' }}>
          EMPLOYMENT VERIFICATION
        </div>
        <div style={{ backgroundColor: '#ffffff' }}>
          This verification is issued for official purposes. Contact HR: (555) 123-4500 | Ref: {data.employeeID}
        </div>
      </div>
    </div>
  );
});

export default EmploymentLetterTemplate;
