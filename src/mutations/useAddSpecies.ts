import { useMutation, UseMutationOptions } from "react-query";
import axios, { queryClient } from "@/utils/request";

const addSpecies = async (input: SpeciesInput) => {
  const { data } = await axios.post("/api/species", input);
  return data;
};

export default function useAddSpecies(
  options?: UseMutationOptions<Species, Error, SpeciesInput>,
) {
  return useMutation<Species, Error, SpeciesInput>(addSpecies, {
    onSuccess: (...params) => {
      options?.onSuccess?.(...params);
      queryClient.invalidateQueries("species");
    },
    ...options,
  });
}
