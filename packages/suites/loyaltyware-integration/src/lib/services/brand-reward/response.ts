export type BrandRewardsResponse = {
    rewardList: RewardList[]
}

type RewardList = {
    id: string,
    name: string,
    status: string,
    startTime: string,
    endTime: string,
    type: string,
    priority: number,
    enabled: boolean,
    intouchPoints: number,
    redemptionType: string,
    groups: any,
    rewardRank: null,
    customFields: null,
    paymentConfigs: PaymentConfigs[]
}

type PaymentConfigs = {
    paymentMode: string,
    id: number,
    points: number
}
