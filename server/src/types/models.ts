import { constSechema } from "../models/constModel"
import { daySechema } from "../models/dayModel"
import { settingsSechema } from "../models/settingsModel"

export type Settings = ReturnType<() => typeof settingsSechema>
export type Day = ReturnType<() => typeof daySechema>
export type Const = ReturnType<() => typeof constSechema>

