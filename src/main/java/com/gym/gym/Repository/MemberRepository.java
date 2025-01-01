package com.gym.gym.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.gym.gym.Entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer>{
    List<Member> findBymemberName(String name);
}
