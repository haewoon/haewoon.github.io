// One entry per picture; the page sorts by date, newest first.
// `file` must match a file in src/photos/.
// `note` is the line that shows under the picture — leave it empty to show none.
export interface Photo {
  file: string;
  place: string;
  /** YYYY-MM */
  date: string;
  note: string;
}

export const photos: Photo[] = [
  {
    file: "202506-Niseko-Mountain-Yotei.png",
    place: "Niseko, Japan",
    date: "2025-06",
    note: "Breakfast with Mt. Yotei in the window.",
  },
  {
    file: "202406-Takamatsu-Ritsurin-Park.png",
    place: "Takamatsu, Japan",
    date: "2024-06",
    note: "Ritsurin Garden, laid out over two centuries.",
  },
  {
    file: "202405-Naoshima-Yellow-Pumpkin.png",
    place: "Naoshima, Japan",
    date: "2024-05",
    note: "Kusama's pumpkin at the end of the pier.",
  },
];
