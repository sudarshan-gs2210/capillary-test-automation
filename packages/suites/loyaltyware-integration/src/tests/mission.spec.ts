import {test, expect} from "@playwright/test";
import { MissionServiceClient } from "../lib/services/Missions/service-clients";
import { log } from "console";



test("MISSION SPEC Health check", async () => {
    const response = await MissionServiceClient.getMission('en',10,'3304044b-bf2b-4c70-97be-ce7f50120848');
    expect(response.statusCode).toBe(200);
})
test("MISSION SPEC CHECK DETAIL",async()=>{
    const response = await MissionServiceClient.getMissionDetail('cc2dc303-3998-4343-8772-6b97dada1992','en','642c5abb-7d9c-4f90-a29a-aef41b449ef6');
    expect(response.statusCode).toBe(200);
})
test("MISSION SPEC CHECK CATEGORY",async()=>{
    const response = await MissionServiceClient.getMissionCategories('en','mission');
    expect(response.statusCode).toBe(200);
})

test("MISSION SPEC CHECK PROGRESS",async()=>{
    const response = await MissionServiceClient.getMissionProgress('f2bddfb8-cfe8-40e5-b15f-11b3c093befd','987321');
    expect(response.statusCode).toBe(500);
})
test("MISSION SPEC CHECK TRACKING_HISTORY",async()=>{
    const response = await MissionServiceClient.getMissionTrackingHistory('en','2024-10-01','2024-10-11','5fe9ed55-bcd7-4b82-8142-13522064cd14','parentChildUser101');
    expect(response.statusCode).toBe(500);
    
    
})
test("MISSION UPDATE_MISSION_PROGRESS",async()=>{
    const response = await MissionServiceClient.update_Mission_Progress()
    expect(response.statusCode).toBe(200);    
})
test("MISSION ENROLLIN",async()=>{
    const response = await MissionServiceClient.mission_Enroll_In()
    expect(response.statusCode).toBe(200);    
})
test("MISSION UNENROLL",async()=>{
    const response = await MissionServiceClient.mission_UnEnroll()
    expect(response.statusCode).toBe(200);    
})

   


