const code =
`<template>
  <vui-echarts-line
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:showSymbol="showSymbol"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { year: 1950, france: 7914, germany: 7251 },
        { year: 1951, france: 8301, germany: 7884 },
        { year: 1952, france: 8446, germany: 8561 },
        { year: 1953, france: 8622, germany: 9252 },
        { year: 1954, france: 9006, germany: 9926 },
        { year: 1955, france: 9453, germany: 10998 },
        { year: 1956, france: 9907, germany: 11751 },
        { year: 1957, france: 10442, germany: 12385 },
        { year: 1958, france: 10681, germany: 12884 },
        { year: 1959, france: 10911, germany: 13759 },
        { year: 1960, france: 11642, germany: 14808 },
        { year: 1961, france: 12168, germany: 15317 },
        { year: 1962, france: 12767, germany: 15872 },
        { year: 1963, france: 13235, germany: 16221 },
        { year: 1964, france: 13969, germany: 17100 },
        { year: 1965, france: 14514, germany: 17838 },
        { year: 1966, france: 15158, germany: 18262 },
        { year: 1967, france: 15759, germany: 18311 },
        { year: 1968, france: 16321, germany: 19254 },
        { year: 1969, france: 17339, germany: 20409 },
        { year: 1970, france: 18185, germany: 21218 },
        { year: 1971, france: 18891, germany: 21695 },
        { year: 1972, france: 19570, germany: 22497 },
        { year: 1973, france: 20486, germany: 23461 },
        { year: 1974, france: 20997, germany: 23662 },
        { year: 1975, france: 20851, germany: 23630 },
        { year: 1976, france: 21661, germany: 24904 },
        { year: 1977, france: 22270, germany: 25678 },
        { year: 1978, france: 22928, germany: 26444 },
        { year: 1979, france: 23647, germany: 27515 },
        { year: 1980, france: 23962, germany: 27765 },
        { year: 1981, france: 24186, germany: 27846 },
        { year: 1982, france: 24753, germany: 27645 },
        { year: 1983, france: 25188, germany: 28227 },
        { year: 1984, france: 25497, germany: 29135 },
        { year: 1985, france: 25917, germany: 29851 },
        { year: 1986, france: 26453, germany: 30514 },
        { year: 1987, france: 26963, germany: 30986 },
        { year: 1988, france: 28101, germany: 31906 },
        { year: 1989, france: 28942, germany: 32706 },
        { year: 1990, france: 29476, germany: 31476 },
        { year: 1991, france: 29707, germany: 32844 },
        { year: 1992, france: 30033, germany: 33221 },
        { year: 1993, france: 29719, germany: 32689 },
        { year: 1994, france: 30303, germany: 33375 },
        { year: 1995, france: 30823, germany: 33843 },
        { year: 1996, france: 31141, germany: 34008 },
        { year: 1997, france: 31756, germany: 34578 },
        { year: 1998, france: 32764, germany: 35254 },
        { year: 1999, france: 33707, germany: 35931 },
        { year: 2000, france: 34774, germany: 36953 },
        { year: 2001, france: 35197, germany: 37517 },
        { year: 2002, france: 35333, germany: 37458 },
        { year: 2003, france: 35371, germany: 37167 },
        { year: 2004, france: 36090, germany: 37614 },
        { year: 2005, france: 36395, germany: 37901 },
        { year: 2006, france: 37001, germany: 39352 },
        { year: 2007, france: 37641, germany: 40693 },
        { year: 2008, france: 37505, germany: 41199 },
        { year: 2009, france: 36215, germany: 38975 },
        { year: 2010, france: 36745, germany: 40632 },
        { year: 2011, france: 37328, germany: 42080 },
        { year: 2012, france: 37227, germany: 42959 },
        { year: 2013, france: 37309, germany: 42887 },
        { year: 2014, france: 37218, germany: 43444 },
        { year: 2015, france: 37599, germany: 44053 }
      ];

      return {
        data: data,
        dimension: "year",
        metrics: [
          { key: "france", name: "France" },
          { key: "germany", name: "Germany" }
        ],
        showSymbol: false
      };
    }
  };
</script>
`;

export default code;