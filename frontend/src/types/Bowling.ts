export interface Bowling {
  bowlerId: number;
  bowlerFirstName: string;
  bowlerMiddleInit?: string; // Assuming it can be nullable
  bowlerLastName: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;

  teamName: string;
}

export {};
