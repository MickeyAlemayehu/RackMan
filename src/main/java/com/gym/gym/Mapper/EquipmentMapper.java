package com.gym.gym.Mapper;

import com.gym.gym.Dto.EquipmentDto;
import com.gym.gym.Entity.Equipment;

public class EquipmentMapper {
    public static EquipmentDto mapToEquipmentDto (Equipment equipment){
        return new EquipmentDto(
            equipment.getEquID(),
            equipment.getEquiName(),
            equipment.getEquiCategory(),
            equipment.getEquiStatus()
        );
    }
    public static Equipment mapToEquipment (EquipmentDto equipmentDto){
        return new Equipment(
            equipmentDto.getEquiName(),
            equipmentDto.getEquiCategory(),
            equipmentDto.getEquiStatus()
        );
    }

}
