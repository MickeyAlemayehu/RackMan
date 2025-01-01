package com.gym.gym.Mapper;

import com.gym.gym.Dto.ActivityClassDto;
import com.gym.gym.Entity.ActivityClass;

public class ActivityClassMapper {
    public static ActivityClassDto mapToClassDto(ActivityClass activityClass){
        return new ActivityClassDto(
            activityClass.getClassID(),
            activityClass.getClassName(),
            activityClass.getSchedule(),
            activityClass.getCapacity(),
            activityClass.getTrainerID()
        );
    }

    public static ActivityClass mapToClass(ActivityClassDto activityClassDto){
        return new ActivityClass(
            activityClassDto.getClassName(),
            activityClassDto.getSchedule(),
            activityClassDto.getCapacity(),
            activityClassDto.getTrainerID()
        );
    }
}
