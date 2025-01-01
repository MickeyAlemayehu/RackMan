package com.gym.gym.Repository;

import java.util.List;
import com.gym.gym.Entity.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{
    List<Trainer> findBytrainerName(String name);
}
