package com.gym.gym.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.gym.gym.Entity.ActivityClass;

@Repository
public interface ActivityClassRepository extends JpaRepository<ActivityClass, Integer>{
    List<ActivityClass> findByclassName(String name);
}
