export type MissionResponse = {
    dataList: DataList[]
}

type DataList = {
    icon: any,
    title:string,
    timestamp:string,
    requestId:string,
    requestURL:string,
    data:Data[],
    trackingType: string,
    customFmissionFrequencyIntervalTypeields: string,
    possiblePoints:number,
    errors:Errors[],
    targetRuleId: number,
    frequencyIntervalAmt: number,
    imagesGallery: ImagesGallery [],
    image:string
    overview: string,
    giftCard: number,
    pointsPerDay:number,
    pointsPerWeek:number,
    pointsForCompletionAmt:number,
    benefits:Benifits[]  ,
    tips:Tips[],
    references: References[],
    pointsForDayLbl: string,
    pointsForWeekLbl: string,
    pointsForMissionCompletionLbl: string,
    earnAsYouProgressLbl:string,
    wellnessBenefitLbl: string,
    goalLbl: string,
    trackerConnectedLbl: string,
    trackerNotConnectedLbl: string
    aboutTheMissionLbl:string,
    goalIcon: any,
    rewardsLbl: string,
    rallyPointsLbl: string,
    rallyPointsIcon: any,
    otherRewardsType: null,
    otherRewardIcon: null,
    otherRewardsUnit: null,
    otherRewardsUnitPlacement: null,
    otherRewardsAmount: null,
    benefitsLbl: string,
    tipsLbl:string,
    referencesLbl: string,
    joinTheMissionBtnLbl:string
    goalBackgroundIcon: any,
    infoIcon: any,
    wellnessBenefitIcon: any,
    benefitsHTML: any
    referencesHTML: any
    tipsHTML: any,
    missionLbl: string
    isClinicalMission: null,
    trackingMethod: string,
    isMissionCategory: boolean,
    isChallengeCategory: boolean,
    isMissionFilterCategory: boolean,
    isChallengeFilterCategory: boolean,
}

type Categories = {
    
}
type Errors={
    name:string,
    data:Data[]
}
type Data={
    categories: Categories[],
    durationIntervalAmt: number,
    targetAmt: number,
    sortOrder: number,
    id: string,
    name: string,
    targetGroupId: string,
    categoryIcon: any,
    missionEffortIntensity: string,
    missionFrequencyIntervalType:string,
    missionTargetIntervalType: string,
    missionWellnessBenefit: string,
    missionDurationIntervalType: string,
    missionTargetType: string,
    errors:Errors[],
    message:string


    
}

type ImagesGallery = {
    
}
type Benifits={
    _key:string,
    markDefs: MarkDefs[]
    children:Children[]
    _type:string,
    style:string

}
type MarkDefs={

}
type Children={
    _type:string,
    marks:Marks[],
    text:string,
    _key:string

}
type Marks={

}
type Tips={
    _key:string,
    markDefs: MarkDefs[]
    children:Children[]
    _type:string,
    style:string
}
type References={
    _key:string,
    markDefs: MarkDefs[]
    children:Children[]
    _type:string,
    style:string
}
