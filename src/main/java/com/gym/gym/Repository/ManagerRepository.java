package com.gym.gym.Repository;

import java.util.List;

import com.gym.gym.Entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Integer> {
    List<Manager> findBymanagerName(String name);
}
