export interface EpisodeData {
  episodes: Episodes
}
export interface LocationData {
  locations: Locations
}
export interface CharacterData {
  characters: Characters
}
interface Episodes {
  results: Episode[]
}
export interface Characters {
  results: Character[]
}
interface Locations {
  results: Location[]
}
export interface Episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: Characters[],
  // TO DO: varētu no otra api pielikt bildi un description
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
export interface Location {
  id: number,
  name: string,
  type: string,
  dimension: string,
}
export interface MatchParams {
  id: string;
}
export interface SingleResponseVars {
  id: number
}
export interface AllResponseVars {
  page: number
}
export interface EpResponse {
  episode: Episode;
}
export interface CharResponse {
  character: Character;
}
