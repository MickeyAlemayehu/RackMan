package com.gym.gym.Mapper;

import com.gym.gym.Dto.TrainerDto;
import com.gym.gym.Entity.Trainer;

public class TrainerMapper {
    public static TrainerDto mapToTrainerDto (Trainer trainer){
        return new TrainerDto(
            trainer.getTrainerID(),
            trainer.getTrainerName(),
            trainer.getTrainerAge(),
            trainer.getTrainerPhone(),
            trainer.getTrainerAddress(),
            trainer.getClassID()
        );
    }
    public static Trainer mapToTrainer (TrainerDto trainerDto){
        return new Trainer(
            trainerDto.getTrainerName(),
            trainerDto.getTrainerAge(),
            trainerDto.getTrainerPhone(),
            trainerDto.getTrainerAddress(),
            trainerDto.getClassID()
        );
    }
}
