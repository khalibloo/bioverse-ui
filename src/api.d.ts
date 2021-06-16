interface Family {
  id: number;
  name: string;
  description: string;
  species: Species[];
}

interface FamilyInput {
  name: string;
  description: string;
}

interface Species {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  family: Family;
}

interface SpeciesInput {
  name: string;
  description: string;
  imageUrl: string;
  familyId: number;
}
