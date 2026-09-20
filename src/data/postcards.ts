// One entry per postcard; the page sorts by date, newest first.
// `file` must match a file in src/postcards/.
// `note` is the line under the picture, `noteEn` its English line.
// Leave both empty to show no caption text.
export interface Postcard {
  file: string;
  place: string;
  /** YYYY-MM */
  date: string;
  /** Korean, shown first. */
  note: string;
  /** English, shown under the Korean line. */
  noteEn: string;
}

export const postcards: Postcard[] = [
  {
    file: "202506-Niseko-Mountain-Yotei.png",
    place: "Niseko, Hokkaido, Japan",
    date: "2025-06",
    note: "요테이산을 보며 편의점 정식",
    noteEn: "A convenience-store meal with a view of Mt. Yotei.",
  },
  {
    file: "202406-Takamatsu-Ritsurin-Park.png",
    place: "Takamatsu, Kagawa, Japan",
    date: "2024-06",
    note: "마음이 편해지던 리츠린 공원",
    noteEn: "Ritsurin Garden, where I felt at ease.",
  },
  {
    file: "202405-Naoshima-Yellow-Pumpkin.png",
    place: "Naoshima, Kagawa, Japan",
    date: "2024-05",
    note: "쿠사마 야요이의 노란 호박을 향해 걸어가는 세 가족",
    noteEn: "A family of three walking toward Yayoi Kusama's yellow pumpkin.",
  },
];
