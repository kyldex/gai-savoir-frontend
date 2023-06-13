export type Contributor = {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  imageUrl?: string;
}

export type ContributorsData = Contributor[];
