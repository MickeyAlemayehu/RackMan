package com.gym.gym.Controller;


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
import com.gym.gym.Dto.TrainerDto;
import com.gym.gym.Service.TrainerService;
import java.util.List;



@RestController
@RequestMapping("/api/trainer")
public class TrainerController {
    
    @Autowired
    private TrainerService trainerService;

    @PostMapping
   public ResponseEntity <TrainerDto> addTrainer(@RequestBody TrainerDto trainerDto){
        TrainerDto savedTrainer = trainerService.addTrainer(trainerDto);
        return new ResponseEntity<> (savedTrainer, HttpStatus.OK); 
   } 

   @GetMapping("{id}")
   public ResponseEntity <TrainerDto> getTrainerById(@PathVariable("id") int trainerID){
    TrainerDto trainerDto = trainerService.getTrainerByID(trainerID);
    return  ResponseEntity.ok(trainerDto);
   }

   @GetMapping
   public ResponseEntity <List<TrainerDto>> getAllTrainer(){
    List <TrainerDto> trainers = trainerService.getAllTrainer();
    return ResponseEntity.ok(trainers); 
   }

   @PutMapping("{id}")
   public ResponseEntity <TrainerDto> updateTrainer(@PathVariable("id") int trainerID,@RequestBody TrainerDto updatedTrainer){
       TrainerDto trainerDto = trainerService.updatedTrainer(trainerID, updatedTrainer);
       return ResponseEntity.ok(trainerDto);
   }

   @DeleteMapping("{id}")
public ResponseEntity<String> deleteTrainerById(@PathVariable("id") int trainerID) {
    trainerService.deleteTrainerById(trainerID);
    return ResponseEntity.ok("Trainer Successfully Deleted");
}

}
