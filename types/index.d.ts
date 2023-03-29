export { Relation, Death, TipIcon } from "./runner-base";

import { BaseEnv } from "./env-base";
import { BaseRunner } from "./runner-base";
import { NMCRunner } from "./runner-nmc";

export interface Runner extends BaseRunner, NMCRunner {};
export interface Env extends BaseEnv {};