package com.gym.gym.Service;


import com.gym.gym.Entity.Member;
import com.gym.gym.Expection.ResourceNotFound;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.gym.gym.Dto.MemberDto;
import com.gym.gym.Mapper.MemberMapper;
import com.gym.gym.Repository.MemberRepository;

@Service
public class MemberService{
    private MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public MemberDto addMember(MemberDto memberDto) {
        Member member = MemberMapper.mapToMember(memberDto);
        Member savedMember = memberRepository.save(member); 
        return MemberMapper.mapToMemberDto(savedMember);
    }

    public MemberDto getMemberById(int memberID) {
        Member member = memberRepository.findById(memberID)
         .orElseThrow ( () -> new ResourceNotFound("Member with the ID " + memberID + " not found"));
        return MemberMapper.mapToMemberDto(member);
    }


    public List<MemberDto> getAllMember() {
        List <Member> members = memberRepository.findAll();
        return members.stream()
        .map((member) -> MemberMapper.mapToMemberDto(member))
        .collect(Collectors.toList());
    }

    public MemberDto updateMember(int memberID, MemberDto updatedMember) {
        Member member = memberRepository.findById(memberID)
         .orElseThrow ( () -> new ResourceNotFound("Member with the ID " + memberID + " not found"));
         if(updatedMember.getMemberName() != null){
            member.setMemberName(updatedMember.getMemberName());
        }
         if (updatedMember.getMemberAge() != 0){
            member.setMemberAge(updatedMember.getMemberAge());
         }
         if (member.getMemberPhone() != null) {
            member.setMemberPhone(member.getMemberPhone());
         }
         if (updatedMember.getMemberAddress() != null) {
            member.setMemberAddress(updatedMember.getMemberAddress()); 
         }
         if (updatedMember.getMembership_plan() != null){
            member.setMembership_plan(updatedMember.getMembership_plan());
         }
         if (updatedMember.getExpiryDate() != null) {
            member.setExpiryDate(updatedMember.getExpiryDate());
         }
         if (updatedMember.getClassID() != 0) {
            member.setClassID(updatedMember.getClassID()); 
         }
         
         Member updatedMemberObj = memberRepository.save(member);
        return MemberMapper.mapToMemberDto(updatedMemberObj);
    }

    public void deleteMemberById(int memberID) {
        memberRepository.findById(memberID)
         .orElseThrow ( () -> new ResourceNotFound("Member with the ID " + memberID + " not found"));
        memberRepository.deleteById(memberID);
    }
    
}
