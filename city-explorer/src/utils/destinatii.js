// a) Listă cu numele orașelor (folosind map)
export const getOrase = (list) => list.map((o) => o.oras)

// b) Destinațiile nevizitate (folosind filter)
export const getNevizitate = (list) => list.filter((o) => !o.vizitat)

// c) Suma zilelor (folosind reduce cu valoarea de pornire 0)
export const totalZile = (list) => list.reduce((sum, o) => sum + o.zile, 0)

// d) Formatare un singur rând text pentru o destinație
export const formatDestinatie = ({ oras, tara, zile, vizitat }) => 
  `[${vizitat ? 'x' : ' '}] ${oras}, ${tara} (${zile} zile)`

// e) Numărul de destinații din fiecare țară (grupare cu reduce)
export const numarPeTara = (list) => 
  list.reduce((acc, { tara }) => ({
    ...acc,
    [tara]: (acc[tara] ?? 0) + 1
  }), {})

// f) Lista ordonată descrescător după zile (pe o copie a listei)
export const sortDupaZile = (list) => [...list].sort((a, b) => b.zile - a.zile)
// Inversarea stării 'vizitat' pentru un ID dat
export const marcheazaVizitat = (list, id) =>
  list.map((o) => (o.id === id ? { ...o, vizitat: !o.vizitat } : o))

// Adăugarea unei destinații noi la final
export const adaugaDestinatie = (list, d) => [...list, d]

// Ștergerea unei destinații după ID
export const stergeDestinatie = (list, id) => list.filter((o) => o.id !== id)