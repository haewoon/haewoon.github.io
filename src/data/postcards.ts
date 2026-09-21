// One entry per postcard; the page sorts by date, newest first.
// `file` must match a file in src/postcards/.
// `note` is the line under the picture, `noteEn` its English line.
// Leave both empty to show no caption text.
// `date` is the full day so same-month cards have a settled order; the page
// shows only the month.
export interface Postcard {
  file: string;
  place: string;
  /** YYYY-MM-DD. Only the month is displayed. */
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
    date: "2025-06-01",
    note: "요테이산을 보며 편의점 정식",
    noteEn: "A convenience-store meal with a view of Mt. Yotei.",
  },
  {
    file: "202406-Takamatsu-Ritsurin-Park.png",
    place: "Takamatsu, Kagawa, Japan",
    date: "2024-06-01",
    note: "마음이 편해지던 리츠린 공원",
    noteEn: "Ritsurin Garden, where I felt at ease.",
  },
  {
    file: "202405-Naoshima-Yellow-Pumpkin.png",
    place: "Naoshima, Kagawa, Japan",
    date: "2024-05-01",
    note: "쿠사마 야요이의 노란 호박을 향해 걸어가는 세 가족",
    noteEn: "A family of three walking toward Yayoi Kusama's yellow pumpkin.",
  },
  {
    file: "202509-IU-Clocktower.png",
    place: "Bloomington, Indiana, USA",
    date: "2025-09-01",
    note: "학교 산책하다가 시계탑 앞에서",
    noteEn: "On a campus walk, stopping at the clock tower.",
  },  
  {
    file: "202506-Obihiro-Hokkaido.png",
    place: "Obihiro, Hokkaido, Japan",
    date: "2025-06-01",
    note: "호텔에서 보이던 수풀 미로",
    noteEn: "The hedge maze we could see from the hotel.",
  },    
  {
    file: "202506-Obihiro-Butadon-Hokkaido.png",
    place: "Obihiro, Hokkaido, Japan",
    date: "2025-06-01",
    note: "맛있었던 부타동",
    noteEn: "Butadon, and it was delicious.",
  },    
  {
    file: "202506-Obihiro-Banei-Hokkaido.png",
    place: "Obihiro, Hokkaido, Japan",
    date: "2025-06-01",
    note: "말들이 정말 힘들게 썰매를 끌던 반에이 경마",
    noteEn: "Banei racing, where the horses strained to haul their sleds.",
  },    
  {
    file: "202506-Unidon-Sapporo.png",
    place: "Sapporo, Hokkaido, Japan",
    date: "2025-06-01",
    note: "바훈우니가 없었던게 아쉬웠지만 그래도 맛있던 우니동",
    noteEn: "No bafun uni that day — a shame, but the unidon was still delicious.",
  },  
  {
    file: "202506-Upopoy-Shiraoi.png",
    place: "Shiraoi, Hokkaido, Japan",
    date: "2025-06-01",
    note: "우포포이에서 아이누족 전통 의상을 입은 지선",
    noteEn: "Jisun in traditional Ainu dress at Upopoy.",
  },     
  {
    file: "202506-Farm-Tomita-Hokkaido.png",
    place: "Furano, Hokkaido, Japan",
    date: "2025-06-01",
    note: "팜 토미타에서 라벤다맛 아이스크림을 먹으며",
    noteEn: "Lavender ice cream at Farm Tomita.",
  },       
  {
    file: "202506-Biei-Aoi-Ike-Hokkaido.png",
    place: "Biei, Hokkaido, Japan",
    date: "2025-06-01",
    note: "청의 호수. 올 때마다 늘 흐리지만 그래도 파란색이 보이는 하늘이었다",
    noteEn: "Blue Pond. Overcast every time we come, but this time some blue came through.",
  },      
  {
    file: "202506-Biei-Michinoeki.png",
    place: "Biei, Hokkaido, Japan",
    date: "2025-06-01",
    note: "비에이 청의 호수 옆에 있던 휴게소에서 발견한 방석 겸 등받이 인형. 나름 비에이 캐릭터였던걸로..",
    noteEn: "A cushion-and-backrest plush at the rest stop by Blue Pond — some sort of Biei mascot, I gather.",
  },        
];
