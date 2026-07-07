export function generateStudentPassword(name: string, phone?: string | null) {
  const firstName = name.trim().split(/\s+/)[0]?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'student';
  const digits = (phone || '').replace(/\D/g, '');
  const suffix = digits.length >= 4 ? digits.slice(-4) : '1234';

  return `${firstName}${suffix}`;
}
