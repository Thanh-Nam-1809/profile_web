/* eslint-disable no-restricted-globals */
export const getDeviceId = () => {
  const fingerprint = [];

  fingerprint.push(navigator.userAgent);
  fingerprint.push(navigator.language);
  fingerprint.push(screen.colorDepth);
  fingerprint.push(new Date().getTimezoneOffset());
  fingerprint.push(typeof sessionStorage !== 'undefined');
  fingerprint.push(typeof localStorage !== 'undefined');
  fingerprint.push(typeof indexedDB !== 'undefined');
  
  const hash = btoa(fingerprint.join(''));  

  return hash;
};