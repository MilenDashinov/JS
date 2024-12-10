let rulers = [
  ['асПАРуХ', 681, 700],
  ['тЕРвеЛ', 700, 718],
  ['СеВаР', 738, 753],
  ['телЕРИГ', 766, 777],
  ['каРДАм', 777, 803],
  ['крум', 803, 814],
  ['ОмурТАг', 814, 831],
];

for (let index = 0; index < rulers.length; index++) {
  if (rulers[index][2] - rulers[index][1] > 15) {
    let names = toCamelCaseCyr(rulers[index][0]);
    console.log(
      `${names} е управлявал ${rulers[index][2] - rulers[index][1]} години `,
    );
  }
}

// Очакван резултат,в конзолата:
// Аспарух е управлявал 19 години.
// Тервел е управлявал 18 години.
// Кардам е управлявал 26 години.
// Омуртаг е управлявал 17 години.

// do not modify!
function toCamelCaseCyr(str) {
  return str
    .toLowerCase()
    .replace(/(?:\b|^|[^а-яА-Я])([а-яА-Я])/g, (all, chr) => chr.toUpperCase());
}
