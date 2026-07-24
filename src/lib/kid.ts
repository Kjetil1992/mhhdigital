// Genererer KID med MOD10 (Luhn) kontrollsiffer
export function generateKID(invoiceNumber: string): string {
  // Trekk ut bare tall fra fakturanummeret, f.eks. MHH-2026-001 → 2026001
  const digits = invoiceNumber.replace(/\D/g, '');

  // MOD10 kontrollsiffer
  let sum = 0;
  let double = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = parseInt(digits[i]);
    if (double) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    double = !double;
  }
  const check = (10 - (sum % 10)) % 10;
  return digits + check;
}
