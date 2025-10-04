export interface Zombie {
  id: string;
  zombieType: string;
  shotTimeSeconds: number;
  bulletsRequired: number;
  score: number;
  threatLevel: number;
}

export interface DefenseResult {
  totalScore: number;
  bulletsUsed: number;
  timeUsed: number;
  zombiesEliminated: Zombie[];
}