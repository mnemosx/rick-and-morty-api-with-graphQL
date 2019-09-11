
// AllEpisodes
export interface EpisodeData {
  episodes: Episodes
}
interface Episodes {
  results: Episode[]
}
export interface Episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: Characters[],
  // TO DO: varētu no otra api pielikt bildi un description
}
export interface Characters {
  name: string,
  image: string,
  results: Character[]
}
export interface AllEpisodeVars {
  page: number
}

// SingleCharacter
export interface MatchParams {
  id: string;
}
export interface CharResponse {
  character: Character;
}
export interface Character {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  type: string;
  gender: string,
  location: Location,
  origin: Location,
  episode: Episode[],
}
export interface CharacterVars {
  id: number
}

// SingleEpisode
export interface EpResponse {
  episode: Episode;
}
export interface EpisodeVars {
  id: number
}

// AllLocations
export interface LocationData {
  locations: Locations
}
interface Locations {
  results: Location[]
}
interface Location {
  name: string,
  type: string,
  dimension: string,
}
export interface LocationVars {
  page: number
}

// Characters
export interface CharacterData {
  characters: Characters
}
export interface CharactersVars {
  page: number
}
