function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  if (
    s1.split('').sort().join('') === s2.split('').sort().join('')
  )
    return true;
  return false;
}

console.log(isAnagram('pak-is_pi', 'apk_ip_si'));
