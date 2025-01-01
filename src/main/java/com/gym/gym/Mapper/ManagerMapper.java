package com.gym.gym.Mapper;

import com.gym.gym.Dto.ManagerDto;
import com.gym.gym.Entity.Manager;

public class ManagerMapper {
    
    public static ManagerDto mapToManagerDto(Manager manager){
        return new ManagerDto(
            manager.getManagerID(),
            manager.getManagerName(),
            manager.getManagerAge(),
            manager.getManagerPhone(),
            manager.getManagerAddress(),
            manager.getUsername(),
            manager.getPassword()
        );
    }
}
