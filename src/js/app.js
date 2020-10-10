export class Validator {
  validateUsername(str) {
    let regexp = /^[a-z](([a-z_-]|\d{1,3}(?=\D))*[a-z])?$/gi; // наверняка можно короче, но вроде норм
    return regexp.test(str);
  }
}

export function formatPhoneNumber(str) {
  let digits = str.replace(/[^+\d]/g, '');
  digits = digits.replace(/^8/g, '+7');
  return digits; // можно ещё кучу проверок придумать, но в задании это не требуется и никак не оговорено
}
