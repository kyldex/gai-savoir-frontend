export type Contributor = {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  imageUrl?: string;
}

export type ContributorsData = Contributor[];
