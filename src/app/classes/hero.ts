export class Hero {
  name: string
  gender: string
  level: number
  race: string
  heroClass: string
  galaxy: string
  attributes: number

  constructor(name: string, gender: string, level: number, race_name: string, heroClass: string, galaxy_name: string, attributes: number) {
    this.name = name;
    this.gender = gender;
    this.level = level;
    this.race = race_name;
    this.heroClass = heroClass;
    this.galaxy = galaxy_name;
    this.attributes = attributes;
  }
}
