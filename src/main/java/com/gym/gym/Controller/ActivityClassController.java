package com.gym.gym.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gym.gym.Dto.ActivityClassDto;
import com.gym.gym.Service.ActivityClassService;

@RestController
@RequestMapping("/api/classes")
public class ActivityClassController {
    
    @Autowired
    private ActivityClassService activityClassService;

    
    @PostMapping
    public ResponseEntity <ActivityClassDto> addActivityClass(@RequestBody ActivityClassDto activityClassDto){
        ActivityClassDto savedClass = activityClassService.addActivityClass(activityClassDto);
        return new ResponseEntity <> (savedClass, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity <ActivityClassDto> getActivityClassById (@PathVariable("id")  int classID){
        ActivityClassDto activityClassDto = activityClassService.getActivityClassById(classID);
        return ResponseEntity.ok(activityClassDto);
    } 

     @GetMapping
   public ResponseEntity <List<ActivityClassDto>> getAllActivityClass(){
    List <ActivityClassDto> activityclasses = activityClassService.getAllActivityClass();
    return ResponseEntity.ok(activityclasses); 
   }
   @PutMapping("{id}")
   public ResponseEntity <ActivityClassDto> updatedActivityClass(@PathVariable("id") int classID,@RequestBody ActivityClassDto updatedEquipment){
       ActivityClassDto activityClassDto = activityClassService.updateActivityClass(classID, updatedEquipment);
       return ResponseEntity.ok(activityClassDto);
   }

   @DeleteMapping("{id}")
public ResponseEntity<String> deleteActivityClassById(@PathVariable("id") int equID) {
    activityClassService.deleteActivityClassById(equID);
    return ResponseEntity.ok("Activity Class Successfully Deleted");
}
}

