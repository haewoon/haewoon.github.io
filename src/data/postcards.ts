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
    date: "2025-06-23",
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
    date: "2025-06-30",
    note: "호텔에서 보이던 수풀 미로",
    noteEn: "The hedge maze we could see from the hotel.",
  },    
  {
    file: "202506-Obihiro-Butadon-Hokkaido.png",
    place: "Obihiro, Hokkaido, Japan",
    date: "2025-06-29",
    note: "맛있었던 부타동",
    noteEn: "Butadon, and it was delicious.",
  },    
  {
    file: "202506-Obihiro-Banei-Hokkaido.png",
    place: "Obihiro, Hokkaido, Japan",
    date: "2025-06-29",
    note: "말들이 정말 힘들게 썰매를 끌던 반에이 경마",
    noteEn: "Banei racing, where the horses strained to haul their sleds.",
  },    
  {
    file: "202506-Unidon-Sapporo.png",
    place: "Sapporo, Hokkaido, Japan",
    date: "2025-06-28",
    note: "바훈우니가 없었던게 아쉬웠지만 그래도 맛있던 우니동",
    noteEn: "No bafun uni that day — a shame, but the unidon was still delicious.",
  },  
  {
    file: "202506-Upopoy-Shiraoi.png",
    place: "Shiraoi, Hokkaido, Japan",
    date: "2025-06-26",
    note: "우포포이에서 아이누족 전통 의상을 입은 지선",
    noteEn: "Jisun in traditional Ainu dress at Upopoy.",
  },     
  {
    file: "202506-Farm-Tomita-Hokkaido.png",
    place: "Furano, Hokkaido, Japan",
    date: "2025-06-25",
    note: "팜 토미타에서 라벤다맛 아이스크림을 먹으며",
    noteEn: "Lavender ice cream at Farm Tomita.",
  },       
  {
    file: "202506-Biei-Aoi-Ike-Hokkaido.png",
    place: "Biei, Hokkaido, Japan",
    date: "2025-06-24",
    note: "청의 호수. 올 때마다 늘 흐리지만 그래도 파란색이 보이는 하늘이었다",
    noteEn: "Blue Pond. Overcast every time we come, but this time some blue came through.",
  },      
  {
    file: "202506-Biei-Michinoeki.png",
    place: "Biei, Hokkaido, Japan",
    date: "2025-06-24",
    note: "비에이 청의 호수 옆에 있던 휴게소에서 발견한 방석 겸 등받이 인형. 나름 비에이 캐릭터였던걸로..",
    noteEn: "A cushion-and-backrest plush at the rest stop by Blue Pond — some sort of Biei mascot, I think.",
  },        
  {
    file: "20250623-Lake-Toya-Hokkaido.png",
    place: "Lake Toya, Hokkaido, Japan",
    date: "2025-06-23",
    note: "몇 년만에 다시 간 토야 호수 앞에 새롭게 글자 간판이 생겨서 온 가족이 O를 만듬",
    noteEn: "Back at Lake Toya after a few years. A new letter sign had gone up, so the whole family made the O.",
  },   
  {
    file: "20250618-Hills-of-Buddha.png",
    place: "Sapporo, Hokkaido, Japan",
    date: "2025-06-18",
    note: "안도 타다오가 만든 머리 대불전. 위로 보이는 파란 하늘과의 대비가 정말 멋졌다",
    noteEn: "Tadao Ando's Hill of the Buddha. The contrast with the blue sky overhead was superb.",
  },     
  {
    file: "20250610-Bulguksa-Korea.png",
    place: "Gyeongju, Korea",
    date: "2025-06-10",
    note: "석가탑. 단순한데 참 아름답다.",
    noteEn: "Seokgatap pagoda. Simple, and genuinely beautiful.",
  },
  {
    file: "20250609-Gyeongju.png",
    place: "Gyeongju, Korea",
    date: "2025-06-09",
    note: "경주하면 왕릉(들).",
    noteEn: "Gyeongju means royal tombs. Plural.",
  },  
  {
    file: "20250607-Han-river.png",
    place: "Seoul, Korea",
    date: "2025-06-07",
    note: "뚝섬 한강 공원에서 친구들과 아이들과 유유자적과 시끌벅적 사이의 어딘가를 보낸 하루",
    noteEn: "A day at Ttukseom Hangang Park with friends and their kids, somewhere between calm and clamor.",
  },    
];
