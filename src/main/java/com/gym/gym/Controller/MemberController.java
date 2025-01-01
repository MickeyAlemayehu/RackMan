package com.gym.gym.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gym.gym.Dto.MemberDto;
import com.gym.gym.Service.MemberService;

@RestController
@RequestMapping("/api/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping
    public ResponseEntity <MemberDto> addMember(@RequestBody MemberDto memberDto){
        MemberDto savedMember = memberService.addMember(memberDto);
        return new ResponseEntity <> (savedMember, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity <MemberDto> getMemberById(@PathVariable("id") int memberID){
        MemberDto memberDto = memberService.getMemberById(memberID);
        return ResponseEntity.ok(memberDto);
    }
    
    @GetMapping
   public ResponseEntity <List<MemberDto>> getAllMember(){
    List <MemberDto> members = memberService.getAllMember();
    return ResponseEntity.ok(members); 
   }

   @PutMapping("{id}")
   public ResponseEntity <MemberDto> updateMember(@PathVariable("id") int memberID,@RequestBody MemberDto updatedMember){
       MemberDto memberDto = memberService.updateMember(memberID, updatedMember);
       return ResponseEntity.ok(memberDto);
   }

    @DeleteMapping("{id}")
public ResponseEntity<String> deleteMemberById(@PathVariable("id") int memberID) {
    memberService.deleteMemberById(memberID);
    return ResponseEntity.ok("Member Successfully Deleted");
}
}
