export enum RangeType {
  MoreThanOrEqual = 0,
  LessThanOrEqual,
  Equal,
}

export enum UniPassLevel {
  LV0 = 0,
  LV1,
  LV2,
  LV3,
  LV4,
  LV5,
  LV6,
}

export enum Chain {
  eth = 'eth',
}

export interface UniPassRequirement {
  level: {
    range: RangeType
    level: UniPassLevel
  }
}

export interface AssetRequirement {
  chain: Chain
  address: string
  range: RangeType
  amount: number
}

export interface Role {
  readonly guild: string
  readonly id: string
  readonly name: string
  readonly color: number
}

export interface Rule {
  ruleId: number
  role: Role
  uniPassRequirement: UniPassRequirement[]
  assetRequirement: AssetRequirement[]
  open: boolean
}

export interface Channel {
  readonly guildId: string
  readonly id: string
  readonly name: string
  readonly type: string
  readonly createdTimestamp: string
}

export interface ChannelRule {
  channel: Channel
  ruleId: number
  open: boolean
  viewChannelList: Role[]
  sendMessageList: Role[]
}
