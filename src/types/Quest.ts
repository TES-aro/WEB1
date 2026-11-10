export type Quest = {
  difficulty: number;
  eligible: boolean;
  members: boolean;
  title: string;
  qp: number;
  status: "STARTED" | "NOT_STARTED" | "COMPLETED";
}
