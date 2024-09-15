// Hier importeer ik de fetchJson functie die ik heb gemaakt in de fetch-json.js file.
import fetchJson from "$lib/fetch-json";
import { error } from '@sveltejs/kit';

// Met de functie load() kan je data ophalen van een externe API of database.
// hier defineer ik de  url van de API die mijn gegevens bevat.
export async function load() {
  const url = `https://fdnd.directus.app/items/person/80`;
// Hier roep ik de fetchJson functie aan om de data van de API op te halen.
// Als de data niet wordt opgehaald, wordt een foutmelding weergegeven.
  const response = await fetchJson(url);
  if (!response || !response.data) {
    throw error(500, 'Failed to fetch person data');
  }
// Hier geef ik de data terug die ik heb opgehaald van de API. Dit sla ik op in de variabele person.
  return {
    person: response.data
  };
}
