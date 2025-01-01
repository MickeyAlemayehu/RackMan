package com.gym.gym.Service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.gym.gym.Dto.TrainerDto;
import com.gym.gym.Entity.Trainer;
import com.gym.gym.Expection.ResourceNotFound;
import com.gym.gym.Mapper.TrainerMapper;
import com.gym.gym.Repository.TrainerRepository;


@Service
public class TrainerService{

    private TrainerRepository trainerRepository;

    public TrainerService(TrainerRepository trainerRepository) {
        this.trainerRepository = trainerRepository;
    }

    public TrainerDto addTrainer(TrainerDto trainerDto) {
        Trainer trainer = TrainerMapper.mapToTrainer(trainerDto);
        Trainer savedTrainer = trainerRepository.save(trainer);
        return TrainerMapper.mapToTrainerDto(savedTrainer);
    }

    public TrainerDto getTrainerByID(int trainerID) {
        Trainer trainer = trainerRepository.findById(trainerID)
        .orElseThrow( () -> new ResourceNotFound("Trainer with the ID " + trainerID + "not found "));
        return TrainerMapper.mapToTrainerDto(trainer);
    }

    public List<TrainerDto> getAllTrainer() {
        List <Trainer> trainers = trainerRepository.findAll();
        return trainers.stream()
        .map((trainer) -> TrainerMapper.mapToTrainerDto(trainer))
        .collect(Collectors.toList());
    }

    public TrainerDto updatedTrainer(int trainerID, TrainerDto updatedTrainer) {
        Trainer trainer = trainerRepository.findById(trainerID)
        .orElseThrow( () -> new ResourceNotFound("Trainer with the ID " + trainerID + "not found "));
        
        if(updatedTrainer.getTrainerName() != null){
            trainer.setTrainerName(updatedTrainer.getTrainerName());
        }
        if (updatedTrainer.getTrainerAge() != null){
            trainer.setTrainerAge(updatedTrainer.getTrainerAge());
        }
        if (updatedTrainer.getTrainerPhone()!= null){
        trainer.setTrainerPhone(updatedTrainer.getTrainerPhone());
        }
        if (updatedTrainer.getTrainerAddress() != null){
            trainer.setTrainerAddress(updatedTrainer.getTrainerAddress());
        }
        if (updatedTrainer.getTrainerAddress() != null){
            trainer.setTrainerAddress(updatedTrainer.getTrainerAddress());
        }
        if (updatedTrainer.getClassID() != 0){
            trainer.setClassID(updatedTrainer.getClassID());
        }
        Trainer updatedTrainerObjTrainer = trainerRepository.save(trainer);
        return TrainerMapper.mapToTrainerDto(updatedTrainerObjTrainer);
    }

    public void deleteTrainerById(int trainerID) {
         trainerRepository.findById(trainerID)
        .orElseThrow( () -> new ResourceNotFound("Trainer with the ID " + trainerID + " not found "));
        trainerRepository.deleteById(trainerID);
    } 

}
