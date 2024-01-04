import {HeroRepresentation} from "./HeroRepresentation";
import {UserRepresentation} from "./UserRepresentation";

export interface RoomRepresentation{
  id: number
  roomName: string
  level: number
  host: string
  heroes: [HeroRepresentation]
  users: [UserRepresentation]
}
