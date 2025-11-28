import React, { forwardRef } from 'react';

const SalaryStatementTemplate = forwardRef(({ data }, ref) => {
  const grossPay = data.baseSalary / 26; // Bi-weekly gross
  const federalTax = grossPay * 0.22;
  const stateTax = grossPay * 0.06;
  const socialSecurity = grossPay * 0.062;
  const medicare = grossPay * 0.0145;
  const retirement = grossPay * 0.05;
  const totalDeductions = federalTax + stateTax + socialSecurity + medicare + retirement;
  const netPay = grossPay - totalDeductions;

  const formatCurrency = (amount) => amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

  return (
    <div 
      ref={ref} 
      style={{
        width: '595px',  // A4 width at 72dpi
        height: '842px', // A4 height at 72dpi
        backgroundColor: '#ffffff',
        padding: '50px 40px',
        fontFamily: "Times New Roman, serif",
        color: '#000000',
        display: 'block',
        boxSizing: 'border-box'
      }}
    >
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '3px solid #1f2937'
      }}>
        {data.universityLogo && (
          <div style={{ marginRight: '25px' }}>
            <img src={data.universityLogo} alt="Logo" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
          </div>
        )}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '5px' }}>
            {data.universityName}
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '3px' }}>
            Payroll Department
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            {data.universityAddress}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>
            SALARY STATEMENT
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            Pay Period: {data.payPeriodStart} - {data.payPeriodEnd}
          </div>
        </div>
      </div>

      {/* Employee Information */}
      <div style={{ 
        backgroundColor: '#f9fafb',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#1f2937' }}>
          Employee Information
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>EMPLOYEE NAME</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>{data.teacherFullName}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>EMPLOYEE ID</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>{data.employeeID}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>DEPARTMENT</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>{data.department}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>POSITION</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>{data.position}</div>
          </div>
        </div>
      </div>

      {/* Earnings Section */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ 
          backgroundColor: '#059669',
          color: 'white',
          padding: '12px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px 8px 0 0'
        }}>
          EARNINGS
        </div>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          border: '2px solid #059669'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f0fdf4' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Description</th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>Hours/Units</th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>Rate</th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>Current Period</th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>Year to Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>Regular Salary</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>80.00</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(grossPay/80)}</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(grossPay)}</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(grossPay * 12)}</td>
            </tr>
            <tr style={{ backgroundColor: '#f0fdf4', fontWeight: '600' }}>
              <td style={{ padding: '12px' }}>TOTAL GROSS PAY</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>—</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>—</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>{formatCurrency(grossPay)}</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>{formatCurrency(grossPay * 12)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Deductions Section */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ 
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '12px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px 8px 0 0'
        }}>
          DEDUCTIONS
        </div>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          border: '2px solid #dc2626'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#fef2f2' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Description</th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>Current Period</th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>Year to Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>Federal Income Tax</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(federalTax)}</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(federalTax * 12)}</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>State Income Tax</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(stateTax)}</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(stateTax * 12)}</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>Social Security Tax</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(socialSecurity)}</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(socialSecurity * 12)}</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>Medicare Tax</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(medicare)}</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(medicare * 12)}</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>Retirement (403b)</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(retirement)}</td>
              <td style={{ padding: '12px', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>{formatCurrency(retirement * 12)}</td>
            </tr>
            <tr style={{ backgroundColor: '#fef2f2', fontWeight: '600' }}>
              <td style={{ padding: '12px' }}>TOTAL DEDUCTIONS</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>{formatCurrency(totalDeductions)}</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>{formatCurrency(totalDeductions * 12)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Net Pay Section */}
      <div style={{ 
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>NET PAY</div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>Amount to be deposited</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{formatCurrency(netPay)}</div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>Current Period</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        borderTop: '1px solid #e5e7eb',
        paddingTop: '20px',
        fontSize: '11px',
        color: '#6b7280',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '10px' }}>
          This statement is for informational purposes only. Please retain for your records.
        </div>
        <div>
          Direct Deposit Information: Funds will be deposited to your designated account on the next business day.
        </div>
        <div style={{ marginTop: '10px' }}>
          Questions? Contact Payroll at (555) 123-4600 or payroll@{data.universityName?.toLowerCase().replace(/\s+/g, '')}.edu
        </div>
      </div>
    </div>
  );
});

export default SalaryStatementTemplate;
