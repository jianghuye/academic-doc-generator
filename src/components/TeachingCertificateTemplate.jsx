import React, { forwardRef } from 'react';

const TeachingCertificateTemplate = forwardRef(({ data }, ref) => {
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
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        {data.universityLogo && (
          <div style={{ marginBottom: '30px' }}>
            <img src={data.universityLogo} alt="Logo" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
          </div>
        )}
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
          {data.universityName}
        </div>
        <div style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>
          {data.college}
        </div>
        
        <div style={{ 
          fontSize: '42px', 
          fontWeight: 'bold', 
          color: '#dc2626',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '20px'
        }}>
          Teaching Certificate
        </div>
        
        <div style={{
          width: '200px',
          height: '4px',
          background: 'linear-gradient(90deg, #dc2626, #fbbf24)',
          margin: '0 auto'
        }} />
      </div>

      {/* Certificate Content */}
      <div style={{ flex: 1, fontSize: '18px', lineHeight: 1.8 }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', fontSize: '20px', fontStyle: 'italic' }}>
          This is to certify that
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          fontSize: '36px', 
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '40px',
          borderBottom: '2px solid #dc2626',
          paddingBottom: '10px'
        }}>
          {data.teacherFullName}
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          has successfully completed the requirements for teaching certification and is hereby 
          authorized to teach in the field of <strong>{data.department}</strong> at {data.universityName}.
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <strong>Areas of Specialization:</strong>
          <ul style={{ marginTop: '10px', paddingLeft: '30px' }}>
            {data.subjects && data.subjects.map((subject, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{subject}</li>
            ))}
          </ul>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <strong>Position:</strong> {data.position}
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          This certification is granted with all the rights, privileges, and responsibilities 
          pertaining thereto, in accordance with the standards and regulations of {data.universityName}.
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '40px', fontSize: '16px' }}>
          <strong>Date of Certification:</strong> {data.certificationDate}
        </div>
      </div>

      {/* Footer Signatures */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ 
            borderBottom: '2px solid #333', 
            width: '200px', 
            margin: '0 auto 10px',
            height: '40px'
          }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {data.officials?.dean || 'Dean of Faculty'}
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            Dean, {data.college}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ 
            borderBottom: '2px solid #333', 
            width: '200px', 
            margin: '0 auto 10px',
            height: '40px'
          }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {data.officials?.principal || 'University Principal'}
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            Principal, {data.universityName}
          </div>
        </div>
      </div>
      
      {/* Certificate Number */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '30px', 
        fontSize: '12px', 
        color: '#6b7280'
      }}>
        Certificate No: TC-{data.employeeID}-{new Date().getFullYear()}
      </div>
    </div>
  );
});

export default TeachingCertificateTemplate;
