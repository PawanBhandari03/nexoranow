export const CONTACT_EMAIL = 'hello@nexoranow.com';

/**
 * Optional form backend (e.g. a Formspree / Web3Forms / Basin endpoint that accepts JSON).
 * Set VITE_FORM_ENDPOINT in Vercel → Project Settings → Environment Variables.
 * Without it, inquiries open the visitor's email client with everything pre-filled.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export type InquiryResult = 'sent' | 'mailto';

export async function sendInquiry(subject: string, fields: Record<string, string>): Promise<InquiryResult> {
  const filled = Object.fromEntries(Object.entries(fields).filter(([, v]) => v.trim() !== ''));

  if (FORM_ENDPOINT) {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ subject, ...filled }),
    });
    if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
    return 'sent';
  }

  const body = Object.entries(filled)
    .map(([key, value]) => `${key}:\n${value}`)
    .join('\n\n');
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return 'mailto';
}
