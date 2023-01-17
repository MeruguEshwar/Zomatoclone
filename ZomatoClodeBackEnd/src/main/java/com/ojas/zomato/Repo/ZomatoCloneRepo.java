package com.ojas.zomato.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojas.zomato.model.Register;

@Repository
public interface ZomatoCloneRepo extends JpaRepository<Register, Integer> {

}
