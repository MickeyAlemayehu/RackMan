package com.gym.gym.Service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.gym.gym.Entity.ActivityClass;
import com.gym.gym.Expection.ResourceNotFound;
import com.gym.gym.Mapper.ActivityClassMapper;
import com.gym.gym.Dto.ActivityClassDto;
import com.gym.gym.Repository.ActivityClassRepository;


@Service
public class ActivityClassService{

    private ActivityClassRepository activityClassRepository;

    public ActivityClassService(ActivityClassRepository activityClassRepository) {
        this.activityClassRepository = activityClassRepository;
    }

    public ActivityClassDto addActivityClass(ActivityClassDto activityClassDto) {
        ActivityClass activityClass = ActivityClassMapper.mapToClass(activityClassDto);
        activityClassRepository.save(activityClass); 
        return ActivityClassMapper.mapToClassDto(activityClass);
    }

    
    public ActivityClassDto getActivityClassById(int classID) {
        ActivityClass activityClass = activityClassRepository.findById(classID)
         .orElseThrow(() -> new ResourceNotFound("Activity Class with the ID " + classID + " not found"));
        return ActivityClassMapper.mapToClassDto(activityClass);
    }

    
    public List<ActivityClassDto> getAllActivityClass() {
        List <ActivityClass> activityclasses = activityClassRepository.findAll();
        return activityclasses.stream()
        .map((activityclass) -> ActivityClassMapper.mapToClassDto(activityclass))
        .collect(Collectors.toList());
    }

    
    public ActivityClassDto updateActivityClass(int classID, ActivityClassDto updatedActivityClass) {
        ActivityClass activityClass = activityClassRepository.findById(classID)
         .orElseThrow(() -> new ResourceNotFound("Activity Class with the ID " + classID + " not found"));
         
         if(updatedActivityClass.getClassName() != null){
            activityClass.setClassName(updatedActivityClass.getClassName());
         }
         if (updatedActivityClass.getSchedule() != null){
            activityClass.setSchedule(updatedActivityClass.getSchedule());
         }
         if (updatedActivityClass.getCapacity() != null){
            activityClass.setCapacity(updatedActivityClass.getCapacity());
         }
         if (updatedActivityClass.getTrainerID() != 0){
            activityClass.setTrainerID(updatedActivityClass.getTrainerID());
         }
         
         ActivityClass updatedActivtyClassObj = activityClassRepository.save(activityClass);
        return ActivityClassMapper.mapToClassDto(updatedActivtyClassObj);
    }

    
    public void deleteActivityClassById(int classID) {
        activityClassRepository.findById(classID)
         .orElseThrow(() -> new ResourceNotFound("Activity Class with the ID " + classID + " not found"));
         activityClassRepository.deleteById(classID);
        
    }   
    
    
}
