package com.gym.gym.Service;


import org.springframework.stereotype.Service;
import java.util.List;
import com.gym.gym.Dto.EquipmentDto;
import com.gym.gym.Entity.Equipment;
import com.gym.gym.Expection.ResourceNotFound;
import com.gym.gym.Mapper.EquipmentMapper;
import com.gym.gym.Repository.EquipmentRepository;
import java.util.stream.Collectors;

@Service
public class EquipmentService{

    private EquipmentRepository equipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    public EquipmentDto addEquipment(EquipmentDto equipmentDto){
        Equipment equipment = EquipmentMapper.mapToEquipment(equipmentDto);
        Equipment savedEquipment = equipmentRepository.save(equipment);
        return EquipmentMapper.mapToEquipmentDto(savedEquipment);
    }

    public EquipmentDto getEquipmentById(int equID) {
        Equipment equipment = equipmentRepository.findById(equID)
          .orElseThrow (() -> new ResourceNotFound("Equipment with ID " + equID + " not found"));
        return EquipmentMapper.mapToEquipmentDto(equipment);
    }

    public List<EquipmentDto> getAllEquipment() {
        List<Equipment> equipments = equipmentRepository.findAll();
        return equipments.stream()
                .map(equipment -> EquipmentMapper.mapToEquipmentDto(equipment))
                .collect(Collectors.toList());
    }

    public EquipmentDto updateEquipment(int equID, EquipmentDto updatedEquipment) {
        Equipment equipment = equipmentRepository.findById(equID)
          .orElseThrow (() -> new ResourceNotFound("Equipment with ID " + equID + " not found"));
          if (updatedEquipment.getEquiName() != null){
            equipment.setEquiName(updatedEquipment.getEquiName());
          }
          if (updatedEquipment.getEquiCategory() != null){
            equipment.setEquiCategory(updatedEquipment.getEquiCategory());
          }
          if (updatedEquipment.getEquiStatus() != null){
            equipment.setEquiStatus(updatedEquipment.getEquiStatus());
          }
          
          Equipment updatedEquipmentObj = equipmentRepository.save(equipment);
        return EquipmentMapper.mapToEquipmentDto(updatedEquipmentObj);
    }

    public void deleteEquipmentById(int equID) {
        equipmentRepository.findById(equID)
          .orElseThrow (() -> new ResourceNotFound("Equipment with ID " + equID + " not found"));
          equipmentRepository.deleteById(equID);
    }


}
