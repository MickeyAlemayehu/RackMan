package com.gym.gym.Repository;

import org.springframework.stereotype.Repository;
import java.util.List;
import com.gym.gym.Entity.Equipment;
import org.springframework.data.jpa.repository.JpaRepository; 

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Integer> {
     List<Equipment> findByequiName(String name); 
    }